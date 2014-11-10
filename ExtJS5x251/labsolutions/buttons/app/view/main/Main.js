Ext.define('Buttons.view.main.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'app-main',
	requires: ['Buttons.view.quote.Quote'],
	items: [{
		xtype: 'quote',
		width: 500,
		height: 400
	}],
	tbar: [{
		text: 'New',
		handler: function(button) {
			button.up('tabpanel').add({
				xtype: 'quote'
			});
		}

	}]



});






















