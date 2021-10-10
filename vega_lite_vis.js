var vg_1 = "map.json";

vegaEmbed("#map_idiom", vg_1).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);

var vg_2 = "scatterplot.json";

vegaEmbed("#scatterplot_idiom", vg_2).then(function(result) {

 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view

}).catch(console.error);