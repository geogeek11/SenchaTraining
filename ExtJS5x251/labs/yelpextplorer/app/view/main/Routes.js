Ext.define('YelpExtplorer.view.main.Routes', {
  extend: 'Ext.Mixin',

  processRoute: function(tab) {
    console.log(tab);
    tab = tab || 'map';
    this.lookupReference('businessesTabPanel').setActiveItem(tab);
  },

  onBusinessesTabChange: function(tabpanel, card) {
    this.cardItemId = card.getItemId();
    this.updateHash();
  },

  updateHash: function(){
    console.log('updateing hash')
    var hash = '!' + (this.cardItemId || 'map');
    this.redirectTo(hash);
  }
});
