
Ext.define('YelpExtplorer.view.business.BusinessDetail',{
  extend: 'Ext.panel.Panel',
  requires: ['YelpExtplorer.view.business.BusinessDetailController'],
  xtype: 'businessdetail',

  controller: "business-businessdetail",
  /*
  viewModel: {
      type: "business-businessdetail"
  },*/

  tpl: [
    '<tpl if="this.isData(values)">',
    '<table><tr><td>',
    '<b>{name}</b><br/>',
    '<img src="resources/images/stars_{stars}.png"/><br/>',
    '<img src="{photo_url}"/><br/><br/>',
    '<tpl if="this.isPortrait()">',
    '</td><td>',
    '</tpl>',
    'Reviews: {review_count}<br/><br/><br/>',
    '{full_address}<br/><br/>',
    '<a href="{url}" target="_blank">Full review at Yelp.com',
    '</td></tr></table>',
    '</tpl>', {
      isData: function(data) {
        return !Ext.Object.isEmpty(data);
      },
      isPortrait: function() {
        return Ext.dom.Element.getOrientation() === 'portrait';
      }
    }
  ],

  tbar: [{
    xtype: 'button',
    text: 'Edit',
    bind: {
      disabled: '{!business}'
    },
    handler: 'onEditClick'
  }],

  bbar: [{
    xtype: 'component',
    height: 25,
    weight: 155,
    html: '<a href="http://www.yelp.com" target="_blank"><img src="resources/images/Powered_By_Yelp_Red.png"/></a>'
  }],

  setRegion: function(region) {
    this.callParent(arguments);
    this.setData(this.getData());
  }
  
});
