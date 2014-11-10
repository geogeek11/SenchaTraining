Ext.define('Associations.model.Customer', {
	extend: 'Associations.model.Base',
	requires: ['Associations.model.Order'],
	fields: ['id', 'name', 'phone'],
	proxy: {
		type: 'ajax',

		url: 'resources/data/customerOrdersFullHierarchy.json',
		// url: 'http://traininglabs.sencha.com/go?fn=assoccustomers',

		reader: {
			rootProperty: 'data'
		}

	},
	hasMany: 'Order'
});