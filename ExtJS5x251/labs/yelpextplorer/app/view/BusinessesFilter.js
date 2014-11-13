Ext.define('YelpExtplorer.view.BusinessesFilter',{
  extend: 'Ext.panel.Panel',
  xtype: 'businessesfilter',
  html: '270',

  renderConfig: {
    pinned: true
  },

  updatePinned: function(pinned){
    this.down('#pin').setType(pinned ? 'pin' : 'unpin');
  },

  toggle: function(){
    this.setPinned(!this.getPinned());
  },

  maybeExpand: function() {
    if (!this.getPinned()) {
        this.expand();
    }
  },
  maybeCollapse: function() {
    if (!this.getPinned()) {
        this.collapse();
    }
  },

  afterRender: function() {
    this.callParent(arguments);
    var me = this;
    me.getEl().on('mouseleave', me.maybeCollapse, me);
    me.splitter.on('render', function(splitter) {
      splitter.getEl().on('mouseover', me.maybeExpand, me);
    });
  },

  tools: [{
    type: 'pin',
    itemId: 'pin',
    callback: function(panel, tool){
      panel.toggle();
    }
  }]
});
