Ext.define('Beatles.view.beatles.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.beatles-grid',

    requires: ['Beatles.model.Person'],

    stores: {
        people: {
          storeId: 'derp',
          model: 'Beatles.model.Person',
          autoLoad: true
        }
    }

});
