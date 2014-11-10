Ext.define('Beatles.view.beatles.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'beatles-grid',

    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Date', 'Ext.window.MessageBox'],

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
        handler: function(button) {
            Ext.Msg.alert(button.getText(), 'Yeah yeah yeah!');
        }
    }]
});