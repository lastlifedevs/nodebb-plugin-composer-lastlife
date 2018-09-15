'use strict';
/* globals $, app, socket */

define('admin/plugins/composer-lastlife', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('composer-lastlife', $('.composer-lastlife-settings'));

		$('#save').on('click', function() {
			Settings.save('composer-lastlife', $('.composer-lastlife-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'composer-lastlife-saved',
					title: 'Settings Saved',
					message: 'Please reload your NodeBB to apply these settings',
					clickfn: function() {
						socket.emit('admin.reload');
					}
				});
			});
		});
	};

	return ACP;
});