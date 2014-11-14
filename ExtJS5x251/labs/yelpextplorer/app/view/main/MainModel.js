/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('YelpExtplorer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Hi, YelpExtplorer',
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

    //TODO - add data, formulas and/or methods to support your view
});
