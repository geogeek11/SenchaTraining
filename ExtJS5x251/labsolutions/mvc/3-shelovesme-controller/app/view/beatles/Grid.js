Ext.define('Beatles.view.beatles.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'beatles-grid',

    requires: [
        'Beatles.view.beatles.GridController',
        'Ext.grid.column.Column',
        'Ext.grid.column.Date',
        'Ext.window.MessageBox'
    ],

    controller: 'beatles-grid',

    title: 'Beatles',
    padding: 8,
    columns: [{
        text: 'Name',
        dataIndex: 'first'
    }, {
        text: 'Last Name',
        dataIndex: 'last'
    }, {
        text: 'Date Of Birth',
        dataIndex: 'dob',
        xtype: 'datecolumn',
        format: 'j F, Y',
        flex: 1
    }],
    tbar: [{
        text: 'She loves me...',
        handler: 'onSheLovesMeClick'
    }]
});