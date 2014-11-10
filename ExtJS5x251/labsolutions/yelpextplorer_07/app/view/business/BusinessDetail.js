Ext.define("YelpExtplorer.view.business.BusinessDetail", {
	extend: "Ext.panel.Panel",
	xtype: 'businessdetail',
	requires: [
		'YelpExtplorer.view.business.BusinessDetailController'
	],
	controller: "business-businessdetail",

	bodyPadding: 6,
	tpl: [
		'<tpl if="this.isData(values)">',
		'<div>',
		'<p><b>{name}</b></p>',
		'<img src="resources/images/stars_{stars}.png"/><br/>',
		'<img src="{photo_url}"/><br/><br/>',
		'Reviews: {review_count}<br/><br/><br/>',
		'{full_address}<br/><br/>',
		'<a href="{url}" target="_blank">Full review at Yelp.com</a>',
		'</div>',
		'</tpl>', {
			isData: function(data) {
				return !Ext.Object.isEmpty(data);
			}
		}
	]


});