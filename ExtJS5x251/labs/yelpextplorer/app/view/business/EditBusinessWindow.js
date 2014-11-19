
Ext.define('YelpExtplorer.view.business.EditBusinessWindow',{
  extend: 'Ext.window.Window',
  requires: [
    'Ext.form.Panel',
    'YelpExtplorer.view.business.EditBusinessWindowController'
  ],
  xtype: 'editbusinesswindow',

  controller: 'business-editbusinesswindow',

  resizeable: false,
  bodyPadding: 8,
  modal: true,
  layout: 'fit',

  items: [{
    xtype: 'form',
    reference: 'form',
    items: [{
      xtype:'textfield',
      name:'name',
      fieldLabel: 'Name'
    }]
  }],

  buttons: [{
    text: 'Save',
    handler: 'onSave'
  }, {
    text: 'Cancel',
    handler: 'onCancel'
  }],

  listeners: {
    show: {
        scope: 'controller',
        fn: 'onWindowShow'
    }
  }

});
