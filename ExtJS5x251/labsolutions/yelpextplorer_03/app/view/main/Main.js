Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.BusinessesFilter',
        'YelpExtplorer.view.business.BusinessDetail',
        'YelpExtplorer.view.businesses.TabPanel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    dockedItems: [{
        dock: 'top',
        xtype: 'banner'
    }],
    items: [{
        region: 'west',
        xtype: 'businessesfilter',
        width: 270
    }, {
        region: 'center',
        xtype: 'businessestabpanel'
    }, {
        region: 'east',
        xtype: 'businessdetail',
        width: 130
    }]

});