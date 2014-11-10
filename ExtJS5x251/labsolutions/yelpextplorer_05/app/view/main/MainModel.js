Ext.define('YelpExtplorer.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.main',

	data: {
		school: null
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
	}

});