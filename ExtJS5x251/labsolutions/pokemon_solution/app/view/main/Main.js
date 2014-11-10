Ext.define('Pokemon.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',
    requires: ['Ext.view.View', 'Ext.tab.Panel', 'Ext.grid.Panel', 'Ext.grid.column.Template', 'Ext.grid.column.Widget'],
    controller: 'main',
    viewModel: {
        type: 'main'
    },
    layout: {
        type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'tabpanel',
        items: [{
            xtype: 'dataview',
            title: 'Dataview',
            reference: 'dataview',
            itemTpl: '<img src="resources/pokemon/{pokedex}.png"/>',
            autoScroll: true,
            bind: {
                store: '{summaries}',
                selection: '{summary}'
            },
            itemCls: 'pokemon',
            overItemCls: 'over',
            selectedItemCls: 'selected',
            listeners: {
                select: 'onDataViewSelect'
            }
        }, {
            title: 'Grid',
            xtype: 'grid',
            bind: {
                store: '{summaries}',
                selection: '{summary}'
            },
            columns: [{
                text: '',
                dataIndex: 'name',
                xtype: 'templatecolumn',
                tpl: '<img src="resources/pokemon/{pokedex}.png" height="50px"/>'
            }, {
                text: 'Name',
                dataIndex: 'name'
            }, {
                text: 'HP',
                dataIndex: 'hp'
            }, {
                text: 'Attack',
                dataIndex: 'attack'
            }, {
                text: 'Defense',
                dataIndex: 'defense'
            }, {
                text: 'Speed',
                dataIndex: 'speed'
            }, {
                text: 'hp/attack/defense/speed',
                xtype: 'widgetcolumn',
                widget: {
                    xtype: 'sparklinebar',
                    height: 50,
                    barWidth: 24,
                    chartRangeMin: 0,
                    chartRangeMax: 100
                },
                dataIndex: 'keystats',
                width: 160
            }]

        }]
    }, {
        region: 'east',
        width: 230,
        bind: {
            data: '{detail}'
        },
        padding: 8,
        style: 'background-color: white',
        autoScroll: true,
        tpl: [
            '<tpl if="this.isData(values)"><div>',
            '<h1>{name} ({pkdx_id})</h1>',
            '<p>Height: {height/10} m </p>',
            '<p>Weight: {weight/10} kg</p>',
            '<p>HP: {hp}</p>',
            '<tpl if="growth_rate"><p>Growth Rate: {growth_rate}</p></tpl>',
            '<p>Egg Groups: {[Ext.Array.pluck(values.egg_groups, "name")]}</p>',
            '<p>Abilities: {[Ext.Array.pluck(values.abilities, "name")]}</p>',
            '<p>Evolutions: <tpl for="evolutions">{to}{[values.level?"@"+values.level:""]}</tpl></p>',
            '<p>Moves: {[Ext.Array.pluck(values.moves, "name").join(" ")]}</p>',
            '</tpl>', {
                isData: function(data) {
                    return !Ext.Object.isEmpty(data);
                }
            }
        ]
    }]

});