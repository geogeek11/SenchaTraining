Ext.create('Ext.grid.Panel', {
    title: 'Aerosmith',
    columns: [{
        text: 'Full Name',
        dataIndex: 'last',
        xtype: 'templatecolumn',
        tpl: '{first} <b>{last}</b>'
    }, {
        text: 'Date Of Birth',
        dataIndex: 'dob',
        xtype: 'datecolumn',
        format:'F d, Y'
    }, {
        text: 'Age',
        dataIndex: 'age'
    }, {
        text: 'Current Member',
        dataIndex: 'currentmember',
        xtype: 'booleancolumn',
        trueText: 'Yes',
        falseText: 'No'
    }, {
        text: 'Net Worth',
        dataIndex: 'networth',
        align: 'right',
        renderer: Ext.util.Format.usMoney
    }, {
        text: 'Dollars/Year',
        dataIndex: 'dollarsPerYear',
        align: 'right',
        renderer: Ext.util.Format.usMoney
    }],
    store: getStore(),
    renderTo: Ext.getBody()
});

function getStore() {
    today = new Date();
    return Ext.create('Ext.data.Store', {
        autoLoad: true,
        fields: ['first', 'last', 'networth', {
            name: 'dob',
            type: 'date',
            dateFormat: 'Y/m/d'
        }, {
            name: 'currentmember',
            type: 'boolean'
        }, {
            name: 'age',
            type: 'int',
            calculate: function(data) {
                var age = (today.getFullYear() - data.dob.getFullYear());
                var hadBday = (Ext.Date.getDayOfYear(today) >= Ext.Date.getDayOfYear(data.dob));
                age = hadBday ? age : (age - 1);
                return age;
            }
        }, {
            name: 'dollarsPerYear',
            calculate: function(data) {
                var age = (today.getFullYear() - data.dob.getFullYear());
                var hadBday = (Ext.Date.getDayOfYear(today) >= Ext.Date.getDayOfYear(data.dob));
                age = hadBday ? age : (age - 1);
                return data.networth/age;
            }
        }],
        proxy: {
            type: 'ajax',
            url: '_Shared/Data/json/aerosmith.json'
        }
    });
}
