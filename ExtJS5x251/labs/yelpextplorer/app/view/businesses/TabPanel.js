Ext.define('YelpExtplorer.view.businesses.TabPanel', {
  extend: 'Ext.tab.Panel',
  requires: [
    'YelpExtplorer.view.businesses.Grid',
    'YelpExtplorer.view.businesses.Map',
    'YelpExtplorer.view.businesses.StarCounts',
    'YelpExtplorer.view.businesses.View'
  ],
  xtype: 'businessestabpanel',

  items: [{
    title: 'Map',
    xtype: 'businessesmap',
    bind: {
      location: '{location}',
      store: '{businessesForCategory}',
      business: '{business}'
    }
  }, {
    title: 'View',
    xtype: 'businessesview',
    bind: {
      store: '{businessesForCategory}',
      selection: '{business}'
    }
  }, {
    title: 'Grid',
    xtype: 'businessesgrid',
    bind: {
      store: '{sortableBusinesses}',
      selection: '{business}'
    }
  }, {
    title: 'Star Counts',
    xtype: 'businessesstarcounts',
    bind: {
      store: '{starCounts}'
    }
  }]
});
