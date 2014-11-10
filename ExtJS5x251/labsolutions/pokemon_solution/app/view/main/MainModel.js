Ext.define('Pokemon.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',

	requires: ['Pokemon.model.Summary'],

	data: {
		name: 'Pokemon'
	},
	stores: {
		summaries: {
			model: 'Pokemon.model.Summary',
			autoLoad: true,
			//storeId: 'summaries',
			sorters: ['pokedex'],
			listeners: {
				load: {
					fn: 'onSummariesLoadFirstTime',
					single: true
				}
			}
		}
	}
});