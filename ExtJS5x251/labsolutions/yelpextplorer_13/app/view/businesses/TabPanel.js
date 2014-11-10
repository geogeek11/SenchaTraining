Ext.define("YelpExtplorer.view.businesses.TabPanel", {
  extend: "Ext.tab.Panel",
  xtype: 'businessestabpanel',

  requires: [
    'YelpExtplorer.view.businesses.Map',
    'YelpExtplorer.view.businesses.View',
    'YelpExtplorer.view.businesses.Grid',
    'YelpExtplorer.view.businesses.StarCounts'
  ],

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
  },, {
    title: 'Counts',
    xtype: 'businessesstarcounts',
    bind: {
      store: '{starCounts}'
    }
  }]

});