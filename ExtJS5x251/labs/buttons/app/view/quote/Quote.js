Ext.define("Buttons.view.quote.Quote", {
	extend: "Ext.panel.Panel",
	xtype: 'quote',
	requires: ['Buttons.view.quote.QuoteController', 'Buttons.view.quote.QuoteModel'],
	controller: "quote",
	viewModel: {
		type: "quote"
	},

	title: 'Jane Austen',
	bind: {
		data: {
			bindTo: '{quote}',
			deep: true
		}
	},
	tpl: '<div style="text-align: {align}">{text}</div>',
	tbar: [
		// Segmented button goes here,
		'-', 
		// Split button goes here
	],
	bodyPadding: 8,
	border: true
});