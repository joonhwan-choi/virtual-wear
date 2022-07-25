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

function isRegExp(obj) {  
   return Object.prototype.toString.call(obj) === '[object RegExp]';  
}

function replaceTextStrings(text, strings, replacements) {
	for (var i = 0; i < strings.length; i++) {
		if (isRegExp( strings[i] )) {
			text =  text.replace( strings[i], replacements[i]);
		} else {
			text =  text.replace(RegExp(strings[i], 'g'), replacements[i]);
		}
	}
	return text;
}

function addElementFromTemplate(parent_element, template_element, strings_to_replace, replacements) {
	template_html = replaceTextStrings($J(template_element).html(), strings_to_replace, replacements);
	$J(parent_element).append(template_html);
	return $J(parent_element).children().last();
}

function getArgumentsFromUrl() {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1),
        args = {};

    while (e = r.exec(q)) { args[d(e[1])] = d(e[2]); }
return args;
}

function createUrlForBody(body) {
	var url = window.location.href.split('?')[0];
	var fixed_measurements = body.getAllLockedMeasurements();
	fixed_measurements.gender = body.getGender();
	return url + '?' + $J.param(fixed_measurements);
}

function checkContext(canvas, string) {
	if (! canvas.getContext("experimental-webgl")) {
		$J("#overlay").show();
		$J("#overlay_content").html("<h1>Sorry!</h1><h3>To view this site, please download the latest version of <a href='http://www.google.com/chrome'>Chrome</a> or <a href='http://www.mozilla.org/firefox/'>Firefox</a>.</h3>")
	} else {
		if (string) { console.log(string); }
	}
}

function exportToPly(body, model, line_delimiter) {
	if (! model) { return "Please wait, the mesh has not yet loaded."}
	var mesh = model.export_mesh();
	var vertices = mesh.vertices;
	var faces = mesh.faces;
	output = [];
	output.push("ply");
	output.push("format ascii 1.0");
	output.push("comment created with bodyVisualizer by eerac");
	for (var i = 0; i < number_of_measurements; i++) {
		if (body.isLocked(measurement_names[i])) {
			output.push("comment " + measurement_names[i] + ": " + body.getFormattedMeasurement(measurement_names[i]) + " " + formatted_measurement_units[i] + ' (set)');
		} else {
			output.push("comment " + measurement_names[i] + ": " + body.getFormattedMeasurement(measurement_names[i]) + " " + formatted_measurement_units[i]);
		}
	}
	output.push("element vertex " + vertices.length);
	output.push("property float x");
	output.push("property float y");
	output.push("property float z");
	output.push("element face " + faces.length);
	output.push("property list uchar int vertex_indices");
	output.push("end_header");
	for (var i = 0; i < vertices.length; i++) {
		output.push(vertices[i].join(' '));
	}
	for (var i = 0; i < faces.length; i++) {
		output.push("3 " + faces[i].join(' '));
	}
	output.push("")
	if (! line_delimiter) { line_delimiter = '\n'; }
	return output.join(line_delimiter);
}
