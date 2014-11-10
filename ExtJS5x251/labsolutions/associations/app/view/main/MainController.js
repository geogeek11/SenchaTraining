/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Associations.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: ['Ext.MessageBox'],

    alias: 'controller.main',

    onCustomerSelect: function(grid, customer) {
        // The Customer model's proxy starts out getting 
        // the whole hierarchy. Therefore, we don't need 
        // to load the store. 
        this.lookupReference('ordersGrid').reconfigure(customer.orders());

        // If the full hierarchy is NOT used, the orders() 
        // store starts out empty and must be loaded. In 
        // this case, the Order model's proxy is used, and 
        // the customer ID is passed to the server as the 
        // foreign key. 

        // To see this, edit the Customer proxy to omit orders, 
        // and un-comment this line.
        // customer.orders().load();

        // Another option is to autoLoad:true on the association,
        // then as soon as orders() is referenced, it's auto-loaded
        // and the call to load() isn't needed at all!    
    }


});