Ext.define('YelpExtplorer.model.Business', {
  extend: 'Ext.data.Model',

  proxy: {
    type: 'ajax',
    url: '//traininglabs.sencha.com/go?schoolid=6&fn=schoolbiz',
    reader: {
      type: 'json',
      rootProperty: 'data'
    }
  }

});
