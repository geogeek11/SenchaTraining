Ext.define('MyApp.model.Person', {
    extend: 'Ext.data.Model',
    proxy: {
        type: 'ajax',
        url: 'resources/Data/json/marxBrothers.json'
    },
    fields: [
      'name',{
        name: 'born',
        type: 'date',
        dateFormat: 'Y/m/d'
      },{
        name: 'died',
        type: 'date',
        dateFormat: 'Y/m/d'
      },{
        name: 'age',
        calculate: function(data) {
          var age = data.died.getFullYear() - data.born.getFullYear();
          var hadBirthday = ( Ext.Date.getDayOfYear(data.died) >= Ext.Date.getDayOfYear(data.born) );
          age = hadBirthday ? age : age - 1;
          return age;
        }
      }
      //'born',
      //'died'
    ]
});
var store = Ext.create('Ext.data.Store', {
    model: 'MyApp.model.Person',
    autoLoad: true
});

Ext.create('Ext.grid.Panel', {
    store: store,
    columns: [{
        text: 'Name',
        dataIndex: 'name'
    }, {
        text: 'Born',
        width: 140,
        xtype : 'datecolumn',
        format : 'F j, Y',
        dataIndex: 'born'
    }, {
        text: 'Died',
        width: 140,
        xtype : 'datecolumn',
        format : 'F j, Y',
        dataIndex: 'died'
    }, {
        text: 'Age',
        xtype: 'numbercolumn',
        dataIndex: 'age',
        format: '0',
        flex: 1
    }],
    title: 'The Marx Brothers',
    width: 450,
    renderTo: Ext.getBody()
});
