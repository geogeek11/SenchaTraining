Ext.define("YelpExtplorer.view.businesses.TabPanel", {
  extend: "Ext.tab.Panel",
  xtype: 'businessestabpanel',

  requires: [
    'YelpExtplorer.view.businesses.Map',
    'YelpExtplorer.view.businesses.View',
    'YelpExtplorer.view.businesses.Grid',
    'YelpExtplorer.view.businesses.StarCounts'
  ],
  reference: 'businessesTabPanel',
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
  },, {
    title: 'Counts',
    xtype: 'businessesstarcounts',
    itemId: 'counts',
    bind: {
      store: '{starCounts}'
    }
  }]

});