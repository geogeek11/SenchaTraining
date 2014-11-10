Ext.define('Toolbars.view.LabPanel', {
	extend: 'Ext.panel.Panel',
	xtype: 'labpanel',
	title: 'My Panel',
	height: 200,
	width: 340,
	padding: 16,




	dockedItems: [{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Top Docked Toolbar One'
		}]
	}, {
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Top Docked Toolbar Two'
		}]
	}],
	tbar: [{
		text: 'tbar'
	}]




});