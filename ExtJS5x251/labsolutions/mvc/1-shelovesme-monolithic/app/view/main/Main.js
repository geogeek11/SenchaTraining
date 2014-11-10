Ext.define('Beatles.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: ['Ext.grid.Panel', 'Beatles.model.Person', 'Ext.Msg'],
	layout: 'fit',

	items: [{
		xtype: 'grid',
		title: 'Beatles',
		padding: 8,
		store: {
			model: 'Beatles.model.Person',
			autoLoad: true
		},
		columns: [{
			text: 'Name',
			dataIndex: 'first'
		}, {
			text: 'Last Name',
			dataIndex: 'last'
		}, {
			text: 'Date Of Birth',
			dataIndex: 'dob',
			xtype: 'datecolumn',
			format: 'j F, Y',
			flex: 1
		}],
		tbar: [{
			text: 'She loves me...',
			handler: function(button) {
				Ext.Msg.alert(button.getText(), 'Yeah yeah yeah!');
			}
		}]
	}]
});