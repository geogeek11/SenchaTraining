Ext.define('YelpExtplorer.view.businesses.TabPanel', {
  extend: 'Ext.tab.Panel',
  requires: [
    'YelpExtplorer.view.businesses.Grid',
    'YelpExtplorer.view.businesses.Map',
    'YelpExtplorer.view.businesses.StarCounts',
    'YelpExtplorer.view.businesses.View'
  ],
  xtype: 'businessestabpanel',
  reference:'businessesTabPanel',

  items: [{
    title: 'Map',
    xtype: 'businessesmap',
    itemId: 'map',
    bind: {
      location: '{location}',
      store: '{businessesForCategory}',
      business: '{business}'
    }
  }, {
    title: 'View',
    xtype: 'businessesview',
    itemId: 'view',
    bind: {
      store: '{businessesForCategory}',
      selection: '{business}'
    }
  }, {
    title: 'Grid',
    xtype: 'businessesgrid',
    itemId: 'grid',
    bind: {
      store: '{sortableBusinesses}',
      selection: '{business}'
    }
  }, {
    title: 'Star Counts',
    xtype: 'businessesstarcounts',
    itemId: 'starcounts',
    bind: {
      store: '{starCounts}'
    }
  }]
});
