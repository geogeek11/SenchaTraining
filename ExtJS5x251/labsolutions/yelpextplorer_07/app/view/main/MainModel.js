Ext.define('YelpExtplorer.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',
	requires: [
		'YelpExtplorer.model.School',
		'YelpExtplorer.model.Business'
	],

	data: {
		school: null,
		business: null
	},
	formulas: {
		location: {
			bind: '{school}',
			get: function(school) {
				if (school) {
					return {
						latitude: school.data.latitude,
						longitude: school.data.longitude
					};
				}
			}
		}
	},
	stores: {
		schools: {
			model: 'YelpExtplorer.model.School',
			autoLoad: true,
			listeners: {
				load: {
					fn: 'onSchoolsLoadFirstTime',
					single: true
				}
			}
		},
		businesses: {
			model: 'YelpExtplorer.model.Business',
			autoLoad: true,
			pageSize: 200,
			remoteFilter: true,
			filters: [{
				property: 'schoolid',
				value: '{school.id}'
			}]
		}

	}
});