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

jQuery.fn.bodySlider = function(body, measurement){
    range = body.getMax(measurement) - body.getMin(measurement) + 1;
    steps = range
	this.slider({
		min:body.getMin(measurement),
		max:body.getMax(measurement),
		step: (steps < 100) ? range/100 : 1,
		value:body.getMeasurement(measurement),
		slide: function( event, self ) {
			body.setMeasurement(measurement, self.value);
		},
		start: function ( event, self ) {
			body.setMeasurementAsActive(measurement)
		},
		stop: function ( event, self ) {
			body.setMeasurementAsInactive(measurement)
		},
		animate:250
	});
	var self = this;
	body.addCallback(function(b) {
		self.slider('value', b.getMeasurement(measurement));
	});
	this.slider( "option", "animate" )
	return this;
};

jQuery.fn.bodyText = function(body, measurement){
	this.val(body.getFormattedMeasurement(measurement));
	this.change(function() {
		if (!body.setFormattedMeasurement(measurement, $J(this).val())) {
			$J(this).val(body.getFormattedMeasurement(measurement));
		};
	});
	var self = this;
	body.addCallback(function(b) {
		self.val(b.getFormattedMeasurement(measurement));
	});
	return this;
};

jQuery.fn.bodyLocked = function(body, measurement){
	this.prop("checked", body.isLocked(measurement));
	this.change(function() {
		if ($J(this).prop("checked")) {
			body.lock(measurement);
		} else {
			body.unlock(measurement);
		}
	});
	var self = $J(this);
	body.addCallback(function(b) {
		self.prop("checked", b.isLocked(measurement));
		if (b.isLocked(measurement)) {
			$J(self).parents('.slider_row').addClass('locked');
		} else {
			$J(self).parents('.slider_row').removeClass('locked');
		}
	});
	return this;
};

jQuery.fn.measurementVisible = function(body_viewer, measurement, measurement_slider_row){
	this.prop("checked", measurement_slider_row.is(":visible"));
	this.change(function() {
		if ($J(this).prop("checked")) {
			console.log(body_viewer)
			body_viewer.show_measurement_slider(measurement)
		} else {
			body_viewer.hide_measurement_slider(measurement)
		}
	});
	return this;
};


function show_ply_in_popup() {
	this.popup_is_open = true;
	$J("#popup").show();
	$J("#popup_content").html("<h3>To export, please copy the ascii ply file highlighted below:</h3><textarea rows='24' style='width: 100%'>" + exportToPly(body, body_viewer.model, '\n') + "</textarea>")
	$J("#popup_content textarea").select();
};

var body_is_ready = false;
var user_agreement_confirmed = false;
function hide_loading_overlay(body_loaded) {
	if (body_loaded === true) { body_is_ready = true; }
	user_agreement_confirmed = $J('#license_confirmed').is(':checked');
	if (body_is_ready) $J('#overlay_heading').html('&nbsp;');
	if (user_agreement_confirmed && body_is_ready) { $J("#overlay").hide(); }
		console.log('x2')
	return true;
}


function hide_ply_popup() {
	if (this.popup_is_open = true) {
		$J("#popup_content").html("");
		$J("#popup").hide();
		this.popup_is_open = false;
	}
};

function show_url_for_body() {
	this.popup_is_open = true;
	$J("#popup").show();
	$J("#popup_content").html("<h3>To copy to clipboard: Ctrl+C, Esc</h3><textarea rows='2' style='width: 100%'>" + createUrlForBody(body) + "</textarea>")
	$J("#popup_content textarea").select();
}

$J(document.documentElement).keyup(function (event) {
	if (event.keyCode == 67) { show_ply_in_popup(); }
	if (event.keyCode == 27) { hide_ply_popup(); }
	if (event.keyCode == 66) { show_url_for_body(); }
} );

/*
var ColorSlider = Class.create({
	slider_id: "",
	slider: null,
	slider_handle: null,
	
	r: 0,
	g: 0,
	b: 0,
	hex: "000000",
	
	callback: null,
	
	initialize: function(slider_id, callback) {
		this.slider_id = slider_id;
		this.callback = callback;
		
		var update_function = function(color_slider_object) {
			return function() { color_slider_object.update(); }
		}(this);
		
		$J('#' + slider_id).slider({
			orientation: "horizontal",
			min: 0, max: 300, value: 180,
			slide: update_function,
			change: update_function,
			animate: 300,
		})
		this.slider = $J('#' + slider_id);
		this.slider_handle = $J('#' + slider_id + ' .ui-slider-handle');
	},
	
	hexFromRGB: function(r, g, b) {
		var hex = [ Math.round(r).toString( 16 ), Math.round(g).toString( 16 ), Math.round(b).toString( 16 ) ];
		if ( hex[0].length === 1 ) { hex[0] = "0" + hex[0]; }
		if ( hex[1].length === 1 ) { hex[1] = "0" + hex[1]; }
		if ( hex[2].length === 1 ) { hex[2] = "0" + hex[2]; }	
		return hex.join( "" ).toUpperCase();
	},
	
	update: function() {
		var s = 130;
		var c = 255 - s;
		
		color_value = 3*this.slider.slider( "value" )/300;
		if (color_value <= 1) {
			this.r = s*(1 - color_value) + c;
			this.g = s*(color_value) + c;
			this.b = c;
		} else if (color_value <= 2) {
			this.r = c;
			this.g = s*(2 - color_value) + c;
			this.b = s*(color_value - 1) + c;
		} else {
			this.r = s*(color_value - 2) + c;
			this.g = c;
			this.b = s*(3 - color_value) + c;
		}
		this.hex = this.hexFromRGB( this.r, this.g, this.b );
		this.slider_handle.css( "background-color", "#" + this.hex );	
		if (this.callback) { 
			return this.callback(this.hex, this.r, this.g, this.b);
		}
	}
});
*/