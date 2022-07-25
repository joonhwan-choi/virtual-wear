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

var BodyViewer = function(body, viewer_div, viewer_canvas, options){
	this.body = body;
	this.current_gender = body.getGender();
	this.viewer_div = viewer_div;
	this.canvas = viewer_canvas;
	
	this.options = jQuery.extend({}, this.defaults, options);
	if (this.options.texture_url) { 
		this.texture_image = new Image();
		this.texture_image.src = this.options.texture_url;
	}
	
	this.setup();
	
	var self = this;
	body.addCallback(function(b) {self.changed(self, b);});


};

BodyViewer.prototype = {
	defaults: {
	},
	setup: function(){
		var self = this;
		this.model_viewer = null;
		this.body_data_is_loaded = {};
		this.body_data_is_loading = {};
		this.body_models = {};
		this.body_model_added_to_viewer = {};
		this.measurement_names_to_offset_indices = {};
		this.more_measurement_names_to_offset_indices = {};
		this.slider_rows = {}
		this.controller = new CameraController(this.canvas);
		
		var self = this;




		for(var ii = 0; ii < number_of_measurements; ii++) {



			addElementFromTemplate($J('#checkbox_rows'), $J('#checkbox_row_template'), ['##string1##','##string2##'], [measurement_names[ii], formatted_measurement_names[ii]]);

			this.slider_rows[measurement_names[ii]] = addElementFromTemplate($J('#slider_rows'), $J('#slider_row_template'), ['##string1##','##string2##'], [measurement_names[ii], formatted_measurement_names[ii]]);
			$J('#measurement_slider_' + measurement_names[ii]).bodySlider(body, measurement_names[ii]);
			$J('#measurement_value_' + measurement_names[ii]).bodyText(body, measurement_names[ii]);
			$J('#measurement_set_' + measurement_names[ii]).bodyLocked(body, measurement_names[ii]);
			$J('#measurement_units_' + measurement_names[ii]).html(formatted_measurement_units[this.body.current_units][ii]);
			if (get_arguments[measurement_names[ii]] != undefined) {
				body.setMeasurement(measurement_names[ii], parseFloat(get_arguments[measurement_names[ii]]))
			}
			if (mdata.show_measurement[ii]){
				this.slider_rows[measurement_names[ii]].show();
			} else {
				this.slider_rows[measurement_names[ii]].hide();
			}
			$J('#measurement_visible_' + measurement_names[ii]).measurementVisible(this, measurement_names[ii], this.slider_rows[measurement_names[ii]]);
		}
		$J('#slider_row_template').remove();
		
		this.loadBodyData(this.body.getGender());
		if (this.readyForDisplay()) { this.draw_body(); }
	},
	
	set_current_gender: function(new_gender) {
		if (new_gender != this.current_gender) {
			this.current_gender = new_gender;
			if (this.body) { this.body.setGender(this.current_gender); }
		}
	},
	hide_measurement_slider: function(measurement) {
		this.slider_rows[measurement].hide()
	},
	show_measurement_slider: function(measurement) {
		this.slider_rows[measurement].show()
	},
	reset_all_measurement_sliders: function() {
	    $J('.body_set').each(function() { if (this.checked) { this.click(); } });
	},
	draw_body: function() {
		this.model_viewer.repaint();
	},
	update_body: function () {
		if (this.body.getGender() != this.current_gender) { this.setModel(this.body.getGender()); }
		
		var get_scale_factor_for_measurement = function(measurement, gender) {
			mean = measurement_mean()[this.body.measurement_name_to_index[measurement]];
			return (this.body.getRawMeasurement(measurement) - mean)/1.0;
		};
		console.log(this.measurement_names_to_offset_indices['female'])
		for (var i = 0; i < number_of_measurements; i++) {
			for (gender in this.body_models) {
				if (this.measurement_names_to_offset_indices[gender][measurement_names[i]] >= 0) {
					this.body_models[gender].setScalefactor(this.measurement_names_to_offset_indices[gender][measurement_names[i]], get_scale_factor_for_measurement(measurement_names[i], gender));
				} else if (this.more_measurement_names_to_offset_indices[gender][measurement_names[i]] >= 0) {
					this.body_models[gender].setMoreScalefactor(this.more_measurement_names_to_offset_indices[gender][measurement_names[i]], get_scale_factor_for_measurement(measurement_names[i], gender));
				}
			}
		}
	},

	changed: function(self, body){
		if (this.readyForDisplay()) {
			this.update_body();
			this.draw_body();
		} else {
			this.loadBodyData(this.body.gender);
		}
	},
	
	add_model: function(model, color, hidden){ model.setColor(color ? color : this.model_color); this.model_viewer.add_model(model, hidden); },
	remove_model: function(model){ this.model_viewer.remove_model(model); },
	show_model: function(){ this.model_viewer.show_model(this.model); this.changed(); },
	hide_model: function(){ this.model_viewer.hide_model(this.model); this.changed(); },
	
	add_body: function(){ console.log('adding body..'); this.add_model(this.model); this.changed(); },
	remove_body: function(){ this.remove_model(this.model); this.changed(); },
	
	setModel: function(gender) {
		if (this.body_models[gender]) {
			hide_loading_overlay(true)
			if (this.model_viewer) { this.model_viewer.disconnect(); }
			this.model = this.body_models[gender];
			this.model_color = [0.5,0.65,1,1];
			this.model.setColor(this.model_color);
			if (this.options.texture_url) { this.model.setTextureImage(this.texture_image); }
			if (! this.model_viewer) {
				this.model_viewer = new ModelViewer([this.model], this.canvas, this.controller, true);
				this.body_model_added_to_viewer[gender] = true
			} else if (! this.body_model_added_to_viewer[gender]) {
				this.add_model(this.model);
				this.body_model_added_to_viewer[gender] = true
			}
			this.current_gender = gender;
			
			checkContext(this.canvas);
			this.changed();
		} else {
			this.loadBodyData(gender);
		}
	},
	loadModel: function(model, gender) {
		console.log('done loading data for ' + gender + '!')
		this.body_data_is_loaded[gender] = true;
		this.body_models[gender] = model;
		this.hide_loading_graphic();
	},
	readyForDisplay: function() {
		return this.body_data_is_loaded[this.body.gender];
	},
	loadBodyData: function(gender) {
		if (! this.body_data_is_loaded[gender]) {
			this.show_loading_graphic();
			if (! this.body_data_is_loading[gender]) {
				console.log('loading data for ' + gender + '...')
				this.body_data_is_loading[gender] = true;
				this.body_data_is_loaded[gender] = false;
				startViewerFunction = function(b, g) { return function(m) { b.loadModel(m, g); b.body_data_is_loading[g] = false; b.setModel(g); } }(this, gender);
				this.model_loader = new ModelLoader(template_url(gender), offset_urls(gender, 7), offset_urls(gender, 30).slice(7), startViewerFunction);
				this.measurement_names_to_offset_indices[gender] = measurement_names_to_offset_indices(gender, 7);
				this.more_measurement_names_to_offset_indices[gender] = measurement_names_to_offset_indices(gender, 30);
			}
		}
	},
	create_mesh: function(name, vertices, faces, texture_coordinates) {
		console.log('creating mesh ' + name)
		this.model_loader.create_mesh(name, vertices, faces, texture_coordinates);
	},
	
	
	show_loading_graphic: function() {
		if (this.model_viewer) { this.model_viewer.clear(); }
	},
	hide_loading_graphic: function() {
		return true;
	},
};
