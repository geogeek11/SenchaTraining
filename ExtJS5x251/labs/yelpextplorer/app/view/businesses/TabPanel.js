Ext.define('YelpExtplorer.view.businesses.TabPanel', {
  extend: 'Ext.tab.Panel',
  requires: [
      'YelpExtplorer.view.businesses.Grid',
      'YelpExtplorer.view.businesses.Map',
      'YelpExtplorer.view.businesses.View'
  ],
  xtype: 'businessestabpanel',

  items: [{
      title: 'Map',
      xtype: 'businessesmap',
      bind: {
        location: '{location}'
    }
  }, {
      title: 'View',
      xtype: 'businessesview'
  }, {
      title: 'Grid',
      xtype: 'businessesgrid'
  }]

});
