Ext.define('YelpExtplorer.view.business.BusinessDetailController', {
  extend: 'Ext.app.ViewController',
  requires: [
    'YelpExtplorer.view.business.EditBusinessWindow'
  ],
  alias: 'controller.business-businessdetail',

  onEditClick: function(button) {
    var business = this.getViewModel().get('business');
    Ext.create({
      xtype: 'editbusinesswindow',
      title: 'Business',
      //height: 200,
      //width: 200,
      autoShow: true,
      viewModel: {
        data: {
          editBusiness: business
        }
      }
    });
  }
});
