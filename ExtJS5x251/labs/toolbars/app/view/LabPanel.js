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
			text: 'Eins!'
		}]
	},{
		xtype: 'toolbar',
		dock: 'top',
		items: [{
			text: 'Zwei!'
		}]
	}],
	/*tbar: [{
		text: 'One'
	}],*/
	bbar: [{
		text: 'bbar'
	}],
	lbar: [{
		text: 'lbar'
	}],
	rbar: [{
		text: 'rbar'
	}]
});
