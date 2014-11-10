Ext.define('Beatles.view.main.Main', {
	extend: 'Ext.container.Container',
	requires: [
		'Beatles.view.beatles.Grid',
		'Beatles.model.Person'
	],

	layout: 'fit',

	items: [{
		xtype: 'beatles-grid',
		store: {
			model: 'Beatles.model.Person',
			autoLoad: true
		}
	}]
});