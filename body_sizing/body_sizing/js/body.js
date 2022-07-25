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

// The Body object is the model that contains the current state of the body and handles callbacks to 
// any objects that are affected by changes to the body.
var Body = function(gender, options){
	this.setGender(gender);
	this.callbacks = [];
	this.onStop_callbacks = $J.Callbacks();
	this.initializeMeasurements({});
	this.setUnits('metric');
	this.options = jQuery.extend({}, this.defaults, options);
};
Body.prototype = {
	defaults: {
		
	},
	getGender: function(){
		return this.gender;
	},
	// Setting the gender may change multiple measurements, as the values may be out of bounds for the 
	// other gender.
	setGender: function(gender) {
		// The body object relies on the file measurement_info.js, which provides measurement statics based on the current_gender.
		set_current_measurement_gender(gender)
		
		if (gender == 'male' || gender == 'female') {
			this.gender = gender;
			
			if (this.conditional_multivariate_gaussian != undefined) {
				var unconditioned_indices = this.conditional_multivariate_gaussian.get_unconditioned_indices();
				var conditioned_indices = this.conditional_multivariate_gaussian.get_conditioned_indices();
				var conditioned_values = this.conditional_multivariate_gaussian.get_values(conditioned_indices);
				this.conditional_multivariate_gaussian = new ConditionalMultivariateGaussian(measurement_mean(), measurement_covariance(), unconditioned_indices, conditioned_indices, conditioned_values);
			}
			this.changed();
			return true;
		} else {
			console.log('undefined gender')
			return false;
		}
	},
	setUnits: function(units) {
		this.current_units = units;
		this.measurement_coversion_factors = measurement_name_to_units_coversion_factors(this.current_units);
	},
	initializeMeasurements: function(conditioned_measurements) {
		// The body object relies on the file measurement_info.js, which provides measurement statics based on the current_gender.
		this.measurements = {};
		mean_values = measurement_mean();
		maximum_values = measurement_maximum_values();
		minimum_values = measurement_minimum_values();
		this.measurement_name_to_index = measurement_names_to_indices();
		this.measurement_coversion_powers = measurement_name_to_units_coversion_powers();
		for (var ii = 0; ii < number_of_measurements; ii++) {
			var measurement_name = measurement_names[ii];
			var index = this.measurement_name_to_index[measurement_name];
			this.measurements[measurement_name] = [mean_values[index], minimum_values[index], maximum_values[index], false, false];
			if (conditioned_measurements[measurement_name] != undefined) {
				this.measurements[measurement_name][0] = conditioned_measurements[measurement_name]
				this.measurements[measurement_name][3] = true;
			}
			if (this.measurement_coversion_powers[measurement_name] != 1.0) {
			    var power = this.measurement_coversion_powers[measurement_name];
			    this.measurements[measurement_name] = [Math.pow(this.measurements[measurement_name][0], power), Math.pow(this.measurements[measurement_name][1], power), Math.pow(this.measurements[measurement_name][2], power), false];
		    }
		}
		var unconditioned_indices = Array(number_of_measurements);
		for (var ii = 0; ii < number_of_measurements; ii++) { unconditioned_indices[ii] = ii; }
		this.conditional_multivariate_gaussian = new ConditionalMultivariateGaussian(measurement_mean(), measurement_covariance(), unconditioned_indices, [], []);
		this.conditioned_measurements_changed = true;
		this.conditionMeasurements();
	},
	// lock, unlock, and isLocked help deal with the case where a user has set a measurement and we 
	// don't want changes to other measurements to effect this one anymore.
	isLocked: function(measurement) { return this.measurements[measurement][3]; },
	lock: function(measurement) { if (this.internal_lock(measurement)) { if (this.changed()) { this.stopped_changing(); } } },
	unlock: function(measurement) { if (this.internal_unlock(measurement))  { if (this.changed()) { this.stopped_changing(); } } },
	
	internal_lock: function(measurement) { if (! this.measurements[measurement][3]) { this.measurements[measurement][3] = true; this.conditioned_measurements_changed = true; return true; } },
	internal_unlock: function(measurement) { if (this.measurements[measurement][3]) { this.measurements[measurement][3] = false; this.conditioned_measurements_changed = true; return true; } },

	// Note that setMeasurement will automatically lock the measurement. Note also that setMeasurement
	// will return false if the value passed in not valid.
	getAllMeasurements: function() {
		measurements = {};
		for(var i = 0; i < number_of_measurements; i++) {
			measurements[measurement_names[i]] = this.getFormattedMeasurement(measurement_names[i]);
		}
		return measurements;
	},
	getAllSizechartMeasurements: function() {
		measurements = {};
		for(var i = 0; i < number_of_measurements; i++) {
			measurements[sizechart_measurement_names[i]] = this.getFormattedMeasurement(measurement_names[i]);
		}
		return measurements;
	},
	getAllLockedMeasurements: function() {
		measurements = {};
		for(var i = 0; i < number_of_measurements; i++) {
			if (this.isLocked(measurement_names[i])) {
				measurements[measurement_names[i]] = this.getMeasurement(measurement_names[i]);
			}
		}
		return measurements;
	},
	getAllRawMeasurements: function() {
		measurements = [];
		for(var i = 0; i < number_of_measurements; i++) {
			measurements.push(this.getRawMeasurement(measurement_names[i]));
		}
		return measurements;
	},
	getMeasurement: function (measurement) {
		return this.measurements[measurement][0];
	},
	getFormattedMeasurement: function (measurement) {
		return (this.measurement_coversion_factors[measurement]*this.measurements[measurement][0]).toFixed(1)
	},
	getRawMeasurement: function (measurement) {
		if (this.measurement_coversion_powers[measurement] != 1.0) { return Math.pow(this.measurements[measurement][0], 1.0/this.measurement_coversion_powers[measurement] ) }
		return this.measurements[measurement][0];
	},
	setMeasurement: function (measurement, value) {
		if (this.getMin(measurement) <= value && value <= this.getMax(measurement)) {
			this.measurements[measurement][0] = value;
			this.internal_lock(measurement);
			this.changed();
			return true;
		} else {
			return false;
		}
	},
	setFormattedMeasurement: function(measurement, value) {
		raw_value = value/this.measurement_coversion_factors[measurement];
		if (this.getMin(measurement) > raw_value) { raw_value = this.getMin(measurement); }
		if (this.getMax(measurement) < raw_value) { raw_value = this.getMax(measurement); }
		return this.setMeasurement(measurement, raw_value);
	},
	setRawMeasurement: function (measurement, value) {
		if (this.measurement_coversion_powers[measurement] != 1.0) { value = Math.pow(value, this.measurement_coversion_powers[measurement]); }
		this.measurements[measurement][0] = value;
	},
	setMeasurementAsActive: function (measurement) {
		this.measurements[measurement][4] = true;
	},
	setMeasurementAsInactive: function (measurement) {
		this.measurements[measurement][4] = false;
		some_measurement_is_changing = false;
		for (var ii = 0; ii < number_of_measurements; ii++) {
			some_measurement_is_changing = some_measurement_is_changing || this.measurements[measurement_names[ii]][4];
		}
		if (! some_measurement_is_changing) { this.stopped_changing(); }
	},
	// Each measurement has a minumum and maximum acceptible value.
	getMin: function (measurement) {
		return this.measurements[measurement][1];
	},
	getMax: function (measurement) {
		return this.measurements[measurement][2];
	},
	// Register a callback with the body to be notified of changes.
	addCallback: function(fn) {
		this.callbacks.push(fn);
	},
	addOnStopCallback: function(fn) {
		this.onStop_callbacks.add(fn);
	},
	// known_measurements returns an array containing the names of all the measurements that 
	// the user can change.
	known_measurements: function() {
		return $J.map(this.measurements, function(v,k) {return k;});
	},
	//Private function, not to be called from outside the Body object
	changed: function() {
		if (this.measurements) {
			previous_measurement_values = this.getAllRawMeasurements();
			this.conditionMeasurements();
			new_measurement_values = this.getAllRawMeasurements();
			
			measurements_changed = false;
			for (ii = 0; ii < number_of_measurements; ii++) {
				measurements_changed = measurements_changed || (Math.pow(new_measurement_values[ii] - previous_measurement_values[ii], 2) > .01);
			}
			if ((measurements_changed) && (this.callbacks)) { for (i = 0; i < this.callbacks.length; i++) { this.callbacks[i](this); } }
			return measurements_changed;
		}
	},
	//Private function, not to be called from outside the Body object
	stopped_changing: function() {
		if (this.measurements) { this.conditionMeasurements(); }
		if (this.onStop_callbacks) { this.onStop_callbacks.fire(this); console.log('stopped!')}
	},
	conditionMeasurements: function() {
		var unconditioned_indices = [], conditioned_indices = [], conditioned_values = [];
		var conditioned_indices_that_changed = [], conditioned_values_that_changed = []
		for (var ii = 0; ii < number_of_measurements; ii++) {
			var measurement_name = measurement_names[ii];
			if (this.isLocked(measurement_name)) {
				conditioned_indices.push(this.measurement_name_to_index[measurement_name]);
				conditioned_values.push(this.getRawMeasurement(measurement_name));
				if (this.conditional_multivariate_gaussian.get_values([this.measurement_name_to_index[measurement_name]])[0] != this.getRawMeasurement(measurement_name)) {
					conditioned_indices_that_changed.push(this.measurement_name_to_index[measurement_name]);
					conditioned_values_that_changed.push(this.getRawMeasurement(measurement_name));
				}
			} else {
				unconditioned_indices.push(this.measurement_name_to_index[measurement_name]);
			}
		}
		if (this.conditioned_measurements_changed) {
			this.conditional_multivariate_gaussian.uncondition_on_indices(unconditioned_indices);
			this.conditional_multivariate_gaussian.condition_on_indices(conditioned_indices, conditioned_values);
			this.conditioned_measurements_changed = false;
		} else {
//			this.conditional_multivariate_gaussian.update_conditioned_values(conditioned_indices, conditioned_values);
			this.conditional_multivariate_gaussian.uncondition_on_indices(unconditioned_indices);
			this.conditional_multivariate_gaussian.condition_on_indices(conditioned_indices, conditioned_values);
		}
		for (var ii = 0; ii < number_of_measurements; ii++) {
			var measurement_name = measurement_names[ii];
			if (! this.isLocked(measurement_name)) {
				var value = this.conditional_multivariate_gaussian.get_values([this.measurement_name_to_index[measurement_name]])[0];
				this.setRawMeasurement(measurement_name, value);
			}
		}
	},	
};


