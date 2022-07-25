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

var measurement_names = [];
var formatted_measurement_names = [];
var sizechart_measurement_names = [];
var formatted_measurement_units = [];
var number_of_measurements = 0;

function init_measurements(current_gender) {
	set_current_measurement_gender(current_gender);
	number_of_measurements = mdata.measurements.length;
	measurement_names = mdata.measurements;
	formatted_measurement_names = mdata.formatted_measurement_names;
	sizechart_measurement_names = mdata.sizechart_measurement_names;
	formatted_measurement_units = mdata.formatted_measurement_units;
}

function measurement_name_to_units_coversion_factors(units) {
	var names_to_values = {};
	for (var ii = 0; ii < number_of_measurements; ii++) {
		names_to_values[mdata.measurement_names[ii]] = mdata.raw_to_formatted_units_conversion_factors[units][ii];
	}
	return names_to_values;
}

function measurement_name_to_units_coversion_powers() {
	var names_to_values = {};
	for (var ii = 0; ii < number_of_measurements; ii++) {
		names_to_values[mdata.measurement_names[ii]] = mdata.raw_to_formatted_units_conversion_powers[ii];
	}
	return names_to_values;
}

var current_measurement_gender = 'female';
function set_current_measurement_gender(gender) {
	current_measurement_gender = gender;
}

function measurement_names_to_indices() {
	var names_to_indices = {};
	for (var ii = 0; ii < number_of_measurements; ii++) {
		for (var jj = 0; jj < number_of_measurements; jj++) {
			if (measurement_names[ii] == mdata[current_measurement_gender].ordering[jj]) {
				names_to_indices[mdata.measurement_names[ii]] = jj;
			}
		}
	}
	return names_to_indices;
}

function template_url(gender) {
     return mdata[gender].body_file;
}

function offset_urls(gender, max_number_of_offsets) {
    var urls = [];
    for (var ii = 0; (urls.length < max_number_of_offsets) && (ii < number_of_measurements); ii++) {
        if (mdata[gender].offset_files[mdata.measurement_names[ii]] != undefined) {
            urls.push(mdata[gender].offset_files[mdata.measurement_names[ii]])
        }
    }
    return urls;
}

function measurement_names_to_offset_indices(gender, max_number_of_offsets) {
    var index = 0;
    var names_to_offset_indices = {};
    for (var ii = 0; ii < number_of_measurements; ii++) {
        if ((mdata[gender].offset_files[mdata.measurement_names[ii]] != undefined) && (index < max_number_of_offsets)) {
            names_to_offset_indices[mdata.measurement_names[ii]] = index++;
        } else {
            names_to_offset_indices[mdata.measurement_names[ii]] = -1;
        }
    }
	return names_to_offset_indices;
}

function measurement_mean() {
	return mdata[current_measurement_gender].means;
}

function measurement_std() {
	var covariance = measurement_covariance();
	var std = Array(number_of_measurements);
	for (var ii = 0; ii < number_of_measurements; ii++) {
		std[ii] = Math.sqrt(covariance[ii][ii]);
	}
	return std;
}

function measurement_covariance() {
	return mdata[current_measurement_gender].covariance;
}

function measurement_maximum_values() { //sidebar maximum values 알고리즘
	var initial_values = measurement_mean();
	var std = measurement_std();
	var maximum_values = Array(number_of_measurements);
	for (var ii = 0; ii < number_of_measurements; ii++) {
		maximum_values[ii] = Math.round(initial_values[ii] + 5*std[ii]);
	}
	return maximum_values;
}

function measurement_minimum_values() { //sidebar minimum values 알고리즘
	var initial_values = measurement_mean();
	var std = measurement_std();
	var minimum_values = Array(number_of_measurements);
	for (var ii = 0; ii < number_of_measurements; ii++) {
		minimum_values[ii] = Math.round(initial_values[ii] - 4*std[ii]);
	//	minimum_values[ii] = Math.max(minimum_values[ii], 0);
	}
	return minimum_values;
}
