
Ext.define('YelpExtplorer.view.business.BusinessDetail',{
    extend: 'Ext.panel.Panel',
    requires: ['YelpExtplorer.view.business.BusinessDetailController'],
    xtype: 'businessdetail',

    controller: "business-businessdetail",
    viewModel: {
        type: "business-businessdetail"
    },

    html: "Hello, World!!"
});
