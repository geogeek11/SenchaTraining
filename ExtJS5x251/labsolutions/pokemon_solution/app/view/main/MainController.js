Ext.define('Pokemon.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: ['Pokemon.model.Detail'],

    alias: 'controller.main',

    routes: {
        'id/:id': 'processRoute'
    },

    create: function(config){
        this.callParent(arguments);
        mainController = this;
    },

    onDataViewSelect: function(dataview, record) {
        var me = this;

        Pokemon.model.Detail.getProxy().setUrl('resources/pokemon/' + record.data.pokedex + '.json');
        Pokemon.model.Detail.load(record.id, {
            callback: function(detail, operation, success) {
                me.getViewModel().set('detail', detail);
            }
        });

        // Updates the URL -- the browser adds it to history 
        this.redirectTo('id/' + record.id);

    },
    processRoute: function(id) {
        id = Ext.Number.from(id);
        var store = this.getViewModel().getStore('summaries');
        if (store) {
            var record = store.getById(id);
            if (record) {
                this.lookupReference('dataview').select(store.getById(id));
            }
        }
    },
    onSummariesLoadFirstTime: function(store) {
        this.processRoute(Ext.util.History.getToken().substr(3));
    }

});