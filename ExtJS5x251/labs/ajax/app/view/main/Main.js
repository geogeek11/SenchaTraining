Ext.define('Ajax.view.main.Main', {
	extend: 'Ext.container.Viewport',

	initComponent: function() {
		var me = this;
		me.callParent();


	},

	tpl: '<tpl for="."><figure><img src="{img}" /><figcaption>{first} {last}</figcaption></figure></tpl>'

});