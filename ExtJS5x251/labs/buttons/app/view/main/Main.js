Ext.define('Buttons.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',
	requirs: ['Buttons.view.main.MainController','Buttons.view.main.MainModel'],
	controller: "main",
	viewModel: {
		type: "main"
	},
	requires: ['Buttons.view.quote.Quote'],
	items: [{
		xtype: 'quote',
		width: 500,
		height: 400
	}]
});






















