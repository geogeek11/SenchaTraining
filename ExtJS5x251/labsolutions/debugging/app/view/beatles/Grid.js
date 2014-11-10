Ext.define('Beatles.view.beatles.Grid', {
    extend: 'Ext.grid.Panel',
    xtype: 'beatles-grid',
    controller: 'beatles-grid',
    viewModel: {
    	type: 'beatles-grid'
    },
    requires: ['Ext.grid.column.Column', 'Ext.grid.column.Date', 'Ext.window.MessageBox'],

    bind: '{people}',

    title: 'Beatles',
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
        itemId: 'sheLovesMe',
        handler: function(button) {
            Ext.Msg.alert(button.getText(), 'Yeah yeah yeah!');
        }
    }]
});