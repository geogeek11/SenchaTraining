Ext.define('YelpExtplorer.view.businesses.StarCounts', {
  extend: 'Ext.chart.PolarChart',
  xtype: 'businessesstarcounts',

  requires: [
    'Ext.draw.Color', // Not needed in ext 5.0.2
    'Ext.chart.interactions.Rotate',
    'Ext.chart.series.Pie',
    'Ext.chart.interactions.ItemHighlight'
  ],

  series: [{
    type: 'pie',
    label: {
        field: 'stars',
        display: 'rotate'
    },
    xField: 'count',
    tooltip: {
      trackMouse: true,
      renderer: function(record, item) {
          var d = record.data;
          this.setHtml('There ' + ((d.count == 1) ? 'is ' : 'are ') + Ext.util.Format.plural(d.count, 'business', 'businesses') + ' with a ' + d.stars + ' star rating.');
      }
    }
  }]

/*
  layout: {
      type: 'card'
  },
  items: []
*/
});
