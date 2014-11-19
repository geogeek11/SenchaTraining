Ext.define('YelpExtplorer.view.business.EditBusinessWindowController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.business-editbusinesswindow',

  onWindowShow: function(win){
    var business = this.getViewModel().get('editBusiness');
    this.lookupReference('form').loadRecord(business);
  },

  onSave: function(button){
    //console.log('onSave');
    var window = this.getView();
    this.lookupReference('form').updateRecord();
    window.close();
  },

  onCancel: function(button){
    //console.log('onCancel');
    var window = this.getView();
    window.close();
  }

});
