Ext.define('Pokemon.model.Summary', {
	extend: 'Ext.data.Model',

	idProperty: 'pokedex',

	fields: ['name', 'resource_uri', 'pokedex', 'hp', 'attack', 'defense', 'speed', {
		name: 'keystats',
		calculate: function(data) {
			return [data.hp, data.attack, data.defense, data.speed]
		}
	}],

	proxy: {
		type: 'ajax',
		url: 'resources/pokemon/inventory.json'
	}
});