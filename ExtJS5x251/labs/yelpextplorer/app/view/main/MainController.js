/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('YelpExtplorer.view.main.MainController', {
  extend: 'Ext.app.ViewController',

  requires: [
    'Ext.MessageBox'
  ],

  mixins: [
    'YelpExtplorer.view.main.Routes'
  ],

  alias: 'controller.main',

  routes: {
    '!:tab': 'processRoute'
  },

  onSchoolsLoadFirstTime: function(store){
    this.getViewModel().set('school', store.getById(6));
  },

  initViewModel: function(vm){
    vm.bind('{business}', function(record){
        //console.log(record && record.data.name);
    });
    vm.bind('{school}', this.clearBusiness, this);
  },

  clearBusiness: function() {
    this.getViewModel().set('business', null);
  },

  onBusinessesRefresh: function(store) {
    var rawData = {};
    store.each(function(school) {
        var stars = school.data.stars.toString();
        rawData[stars] = rawData[stars] || 0;
        rawData[stars]++;
    });
    var data = [];
    Ext.Array.forEach(["0", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5"], function(item) {
        data.push([item, rawData[item]]);
    });
    this.getStore('starCounts').setData(data);
  }

});
