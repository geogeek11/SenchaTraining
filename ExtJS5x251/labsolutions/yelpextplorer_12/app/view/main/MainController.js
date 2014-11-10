Ext.define('YelpExtplorer.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'Ext.MessageBox'
    ],

    alias: 'controller.main',

    onSchoolsLoadFirstTime: function(store) {
        this.getViewModel().set('school', store.getById(20)); // 20 is the University of Illinois
    },
    initViewModel: function(vm) {
        var me = this;
        vm.bind('{school}', this.clearBusiness, this);
    },
    clearBusiness: function() {
        this.getViewModel().set('business', null);
    }
});