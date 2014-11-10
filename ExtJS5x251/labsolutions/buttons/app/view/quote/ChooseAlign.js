Ext.define('Buttons.view.quote.ChooseAlign', {
	extend: 'Ext.button.Segmented',
	xtype: 'choosealign',

	defaults: {
		handler: 'onChooseAlign'
	},
	items: [{
		icon: 'resources/icons/text_align_left.png',
		itemId: 'left',
		pressed: true
	}, {
		icon: 'resources/icons/text_align_center.png',
		itemId: 'center'
	}, {
		icon: 'resources/icons/text_align_right.png',
		itemId: 'right'
	}]
});