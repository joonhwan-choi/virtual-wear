// ***************************************************************** LICENSE AND COPYRIGHT *****************************************************************
// 
// Copyright Max Planck Gesellshaft, 2011
// 
// All software, data, text, and design used in this web application is the sole property of the Max Plank Gesellshaft and/or Brown University. 
// This application is provided solely for research and personal use.  Commercial use and reverse engineering of this application is explicitly prohibited.
// No warranty or suitability for any purpose is implied. 
// 
// Commercial licensing requests should be directed to Michael Black <black@is.mpg.de> .
// 
// Patents pending.
//
// *********************************************************************************************************************************************************

var reset_size_viewer = function(gender) {
	$J("#clothing_categories").empty();
	for (var i = 0; i < sizechart_categories[gender].length; i++) {
		$J("#clothing_categories").append("<option value='" + i + "'>" + sizechart_categories[gender][i] + "</option>");
	}
	$J("#clothing_categories").change(update_current_category);
	$J("#clothing_categories option:eq(0)").attr("selected", "selected");
	current_category = sizechart_categories[gender][0];
}

var update_current_category = function() {
	current_category = sizechart_categories[current_gender][$J("#clothing_categories").val()];
	setup_brand_rows(current_gender, current_category);
}
var current_sizecharts = [];
var setup_brand_rows = function(gender, category) {
	current_sizecharts = sizecharts_by_category[gender][category];
	$J('#brand_rows').empty();
	for(var ii = 0; ii < current_sizecharts.length; ii++) {
		brand_key = sizechart_brands[current_sizecharts[ii]]
		addElementFromTemplate($J('#brand_rows'), $J('#brand_row_template'), ['##string1##','##string2##','##string3##'], [brand_key, brand_names[brand_key], (ii % 2 ? 'even' : 'odd')]);
	}
	update_sizes();
}
var current_sizes_by_brand = [];
var compute_size_from_measurements = function(sizechart_name, available_measurements) {
	sizechart = sizecharts[sizechart_name];
	chart_measurements = sizechart['measurements'];
	measurements = Array(chart_measurements.length)
	for (ii = 1; ii < chart_measurements.length; ii++) {
		measurements[ii - 1] = available_measurements[chart_measurements[ii]] ? 0.3937*parseFloat(available_measurements[chart_measurements[ii]]) : false;
//		measurements[ii - 1] = available_measurements[chart_measurements[ii]] ? parseFloat(available_measurements[chart_measurements[ii]]) : false;

	}
	
	sizes = sizechart['sizes'];
	errors = Array(sizes.length);
	min_error = 100000000;
	for (ii = 0; ii < sizes.length; ii++) {
		errors[ii] = 0.0;
		for (jj = 0; jj < measurements.length; jj++) {
			if (measurements[jj] && sizes[ii][jj + 1]) { errors[ii] = errors[ii] + Math.pow(measurements[jj] - parseFloat(sizes[ii][jj + 1]), 2); }
		}
		if (errors[ii] < min_error) {
			best_size = sizes[ii][0];
			min_error = errors[ii];
		}
	}
	return best_size
}
var update_sizes = function() {
	for(var ii = 0; ii < current_sizecharts.length; ii++) {
		brand_key = sizechart_brands[current_sizecharts[ii]]
		current_sizes_by_brand[brand_key] = compute_size_from_measurements(current_sizecharts[ii], body.getAllSizechartMeasurements());
		$J('#' + brand_key + '_row .size').text(current_sizes_by_brand[brand_key]);
	}
}
