Ext.define('Associations.model.Order', {
	extend: 'Associations.model.Base',

	fields: ['id', {
		name: 'customer_id',
		//reference: 'Customer'
	}, {
		name: 'date',
		type: 'date'
	}],
	proxy: {
		type: 'ajax',
		url: 'http://traininglabs.sencha.com/go?fn=assocorders',
		reader: {
			rootProperty: 'data'
		}
	}

});
