Ext.define('Associations.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Associations.view.main.MainController',
        'Associations.view.main.MainModel'
    ],

    xtype: 'app-main',

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'vbox'
    },

    items: [{
        xtype: 'grid',
        title: 'Customers',
        bind: {
            store: '{customers}'
        },
        listeners: {
            itemdblclick: 'onCustomerSelect'
        },
        columns: [{
            text: 'Id',
            dataIndex: 'id'
        }, {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }, {
            text: 'Phone',
            dataIndex: 'phone',
            flex: 1
        }],
        tbar: ['Double-click on a customer to see its associated orders.'] // bind: {
    }, {
        xtype: 'grid',
        title: 'Orders',
        reference: 'ordersGrid',
        columns: [{
            text: 'Id',
            dataIndex: 'id'
        }, {
            text: 'Customer ID',
            dataIndex: 'customer_id'
        }, {
            text: 'Date',
            xtype: 'datecolumn',
            dataIndex: 'date',
            flex: 1
        }]

    }],
    defaults: {
        height: 200,
        width: 500
    }
});