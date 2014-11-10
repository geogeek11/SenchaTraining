Ext.define('Buttons.view.quote.ChooseQuote', {
    extend: 'Ext.button.Split',
    xtype: 'choosequote',
    text: 'Choose a Quote',
    menu: {
        defaults: {
            handler: 'onChooseQuote'
        },
        items: [{
            text: 'Towels'
        }, {
            text: 'Babal Fish'
        }, {
            text: 'Freedom'
        }]
    }
});