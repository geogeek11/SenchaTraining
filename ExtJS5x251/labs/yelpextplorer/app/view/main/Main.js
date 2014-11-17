/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('YelpExtplorer.view.main.Main', {
    extend: 'Ext.panel.Panel',
    requires: [
        'YelpExtplorer.view.main.MainController',
        'YelpExtplorer.view.main.MainModel',
        'YelpExtplorer.view.Banner',
        'YelpExtplorer.view.BusinessesFilter',
        'YelpExtplorer.view.businesses.TabPanel',
        'YelpExtplorer.view.business.BusinessDetail'
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
      //height: 100,
      width: 270,
      border: true,
      title: 'Filter the things!',
      collapsible: true,
      collapseMode: 'mini',
      titleCollapse: true
    }, {
      region: 'center',
      xtype: 'businessestabpanel'
      //height: 100
    }, {
      region: 'east',
      xtype: 'businessdetail',
      //height: 100,
      width: 270,
      border: true,
      title: 'Business Details:',
      //weight:-20,
      collapsible: true,
      collapseMode: 'mini',
      titleCollapse: true
    }]
});
