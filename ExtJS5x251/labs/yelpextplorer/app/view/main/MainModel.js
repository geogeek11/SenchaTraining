/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('YelpExtplorer.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    requires: [
      'YelpExtplorer.model.School',
      'YelpExtplorer.model.Business',
      'YelpExtplorer.model.Category'
    ],
    alias: 'viewmodel.main',

    data: {
        //name: 'Hi, YelpExtplorer',
        school: null,
        business: null,
        category: null
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
        }],
        sorters: ['name']
      },
      categories: {
        type: 'tree',
        model: 'YelpExtplorer.model.Category',
        autoLoad: true,
        rootVisible: true,
        root: {
            text: 'All',
            expanded: true
        }
      },
      sortableBusinesses: {
        source: '{businessesForCategory}'
      },
      businessesForCategory: {
        source: '{businessstore}',
        filters: [{
            category: '{category}',
            id: 'cat',
            filterFn: function(business) {
                if (!this.category) {
                    return true; // Treat no selection as "All"
                }
                var c = this.category.data.text;
                return (c === 'All') || Ext.Array.contains(business.data.categories, c);
            }
        }]
      }
    }
});
