Ext.define('YelpExtplorer.view.BusinessesFilter',{
  extend: 'Ext.panel.Panel',
  requires: ['Ext.form.field.ComboBox'],
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
  }],

  tbar: [{
    xtype: 'combobox',
    width: 150,
    forceSelection: true,
    emptyText: 'Select a university',
    /*store: {
        model: 'Ext.data.Model',
        data: [
            {"id":0, "name":"USC", "latitude":34.01937, "longitude":-118.28611},
            {"id":1, "name":"MIT", "latitude":42.36561, "longitude":-71.104032},
            {"id":20, "name":"Illinois", "latitude":40.111721,"longitude":-88.2309}
        ]
    },*/
    bind: {
        selection: '{school}',
        store: '{schools}'
    },
    queryMode: 'local',
    displayField: 'name',
    valueField: 'id'
  }]
});
