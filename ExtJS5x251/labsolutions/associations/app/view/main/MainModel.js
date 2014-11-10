Ext.define('Associations.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    requires: ['Associations.model.Customer'],
    stores: {
    	customers: {
    		model: 'Associations.model.Customer',
    		autoLoad: true
    	}
    }
});