Ext.define('DynamicToolbar.view.DynamicToolbar', {
	extend: 'Ext.Toolbar',
	xtype: 'dynamictoolbar',
	config: {
		// Serve this via a dynamic page, such as a JSP
		url: 'resources/menu.json'
	},
	initComponent: function() {
		var me = this;
		Ext.Ajax.request({
			url: this.getUrl(),
			success: function(xhr) {
				me.success(xhr);
			}
		});
		this.callParent();
	},
	success: function(xhr) {
		var config = Ext.JSON.decode(xhr.responseText);
		this.removeAll(); // Only needed if you'll refresh the menu over time
		this.add(config);
	}
});