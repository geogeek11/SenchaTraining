Ext.define('YelpExtplorer.view.businesses.View', {
  extend: 'Ext.view.View',
  xtype: 'businessesview',

  itemTpl: '<figure><img src="{photo_url}" /><figcaption>{name}</figcaption></figure>',
  itemCls: 'businessesview',
  overItemCls: 'over',
  selectedItemCls: 'selected',
  autoScroll:true

});
