Ext.define("Buttons.view.quote.Quote", {
	extend: "Ext.panel.Panel",
	xtype: 'quote',
	requires: ['Buttons.view.quote.QuoteController', 'Buttons.view.quote.QuoteModel'],
	controller: "quote",
	viewModel: {


		type: "quote"
	},

	title: 'Hitchhiker\'s Guide',
	bind: {
		data: {
			bindTo: '{quote}',
			deep: true
		}
	},
	tpl: '<div style="text-align: {align}">{text}</div>',
	tbar: [{
			xtype: 'segmentedbutton',
			defaults: {
				handler:'onChooseAlign'
			},
			items: [{
				  icon: 'resources/icons/text_align_left.png',
				  itemId: 'left',
				  pressed: true
				},{
				  icon: 'resources/icons/text_align_center.png',
				  itemId: 'center'
				},{
				  icon: 'resources/icons/text_align_right.png',
				  itemId: 'right'
			}],
		},'-',{
			xtype: 'splitbutton',
			text: 'Choose Wisely',
			reference: 'splitbutton',
			menu: {
				defaults: {
					handler:'onChooseQuote'
				},
				items: [{
				 text: 'Towels'
				},{
					text: 'Babal Fish'
				},{
					text: 'Freedom'
				}]
			}
		}
	],
	bodyPadding: 8,
	border: true
});
