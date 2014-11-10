Ext.define('Pokemon.model.Detail', {
	extend: 'Ext.data.Model',

	fields: [{
		name: 'attack',
		type: 'auto'
	}, {
		name: 'speed',
		type: 'auto'
	}, {
		name: 'aggression',
		calculate: function(data) {
			return data.attack * data.speed;
		}
	}],
	proxy: {
		type: 'ajax'
	}
});