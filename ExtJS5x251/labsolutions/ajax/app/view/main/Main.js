Ext.define('Ajax.view.main.Main', {
    extend: 'Ext.container.Viewport',

    initComponent: function() {
        var me = this;
        me.callParent();

        Ext.Ajax.request({
            url: 'resources/data/theBeatles.json',
            success: function(response) {
                console.dir(response);
                var data = Ext.JSON.decode(response.responseText);
                me.setData(data);
            }
        });

    },

    tpl: '<tpl for="."><figure><img src="{img}" /><figcaption>{first} {last}</figcaption></figure></tpl>'


});