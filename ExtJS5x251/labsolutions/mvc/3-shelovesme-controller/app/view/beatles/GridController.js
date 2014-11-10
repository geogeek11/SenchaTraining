Ext.define('Beatles.view.beatles.GridController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.beatles-grid',

	onSheLovesMeClick: function(button) {
		Ext.Msg.alert(button.getText(), 'Yeah yeah yeah!');
	}

});