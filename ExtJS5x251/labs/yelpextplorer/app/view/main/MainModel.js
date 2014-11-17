/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('YelpExtplorer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
      'YelpExtplorer.model.School',
      'YelpExtplorer.model.Business'
    ],
    alias: 'viewmodel.main',

    data: {
        //name: 'Hi, YelpExtplorer',
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
      businessstore: {
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

    //TODO - add data, formulas and/or methods to support your view
});
