Ext.define("YelpExtplorer.view.business.BusinessDetail",{
    extend: "Ext.panel.Panel",
    xtype: 'businessdetail',
    requires: [
    	'YelpExtplorer.view.business.BusinessDetailController'
    ],
    controller: "business-businessdetail",
    html: "businessdetail"
});
