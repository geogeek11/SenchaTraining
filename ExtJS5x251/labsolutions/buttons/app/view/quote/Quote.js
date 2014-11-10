Ext.define("Buttons.view.quote.Quote", {
	extend: "Ext.panel.Panel",
	requires: ['Buttons.view.quote.QuoteController', 'Buttons.view.quote.ChooseQuote', 'Buttons.view.quote.ChooseAlign'],
	xtype: 'quote',
	controller: "quote",
	viewModel: {
		type: "quote"
	},
	autoScroll: true,
	title: 'Quotes',
	bind: {
		data: {
			bindTo: '{quote}',
			deep: true
		}
	},
	tpl: '<div style="text-align: {align}">{text}</div>',
	tbar: [{
				xtype: 'choosealign'
		},
		'-', {
			xtype: 'choosequote',
			reference: 'splitbutton'
		}
	],
	bodyPadding: 8,
	border: true
});