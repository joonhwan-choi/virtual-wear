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

var ArrayUtil = {
	initArray1D : function (length, value) {
		var one_d_array = new Array(length);
		for (var i = length; i; ) { one_d_array[--i] = value; }
		return one_d_array
	},

	flatten_two_d_array : function(two_d_array) {
		if (! two_d_array.length) { return []; }
		
		var height = two_d_array.length;
		var width = two_d_array[0].length;
		var length = height*width;
		var one_d_array = new Array(length);
		var index = length;
		for (i = height; i; ) {
			--i;
			for (j =  width; j; ) {
				one_d_array[--index] = two_d_array[i][--j];
			}
		}
		return one_d_array;
	}
};

String.prototype.format = function() {
	var formatted = this;
	for (var i = 0; i < arguments.length; i++){ formatted = formatted.replace("{" + i+ "}", arguments[i]) }
	return formatted;
};

var print_to_log = function printToLog() {
	var string = arguments.length ? arguments[0] : '';
	var content = [];
	for (var i = 1; i < arguments.length; i++) { content.push(arguments[i]); }
	console.log(string.format(content));
}

var FileLoader = Class.create({
	urls_to_load: [],
	callback_functions: null,
	url_done_loading: {},
	url_load_error: {},
	
	initialize: function(urls, callback) {
		this.urls_to_load = urls;
		this.callback_functions = callback;
		for (var i = 0; i < this.urls_to_load.length; i++) { this.start_loading_url(i); }
	},
	
	start_loading_url: function(url_index) {
		url = this.urls_to_load[url_index];
		this.url_done_loading[url] = false;
		this.url_load_error[url] = false;
		
		function create_callback(file_loader, url, url_index, load_succeeded) 
			{ return function(response) { file_loader.finish_loading_url(response, url, url_index, load_succeeded) } }
		
		var request_setup =
			{ method: 'get', onSuccess: create_callback(this, url, url_index, true), onFailure: create_callback(this, url, url_index, false) }
		new Ajax.Request(url, request_setup);
	},
	
	finish_loading_url: function(response, url, url_index, load_succeeded) {
		this.url_done_loading[url] = true;
		this.url_load_error[url] = load_succeeded;
		if (! load_succeeded) { print_to_log('{0} failed to load (status {1}): {2}', url, response.status, response.statusText) }
		if (this.callback_functions[url_index]) { eval(response.responseText); this.callback_functions[url_index](response, url, load_succeeded); }
	},
	
	all_done: function() {
		return true;
	}
});

var PrioritizedFileLoader = Class.create({
	lists_of_urls_to_load: [],
	callback_functions: [],
	current_priority: 0,
	current_file_loader: null,
	
	initialize: function(url_arrays, callbacks) {
		this.lists_of_urls_to_load = url_arrays;
		this.callback_functions = callbacks;
		this.current_priority = 0;
		this.load_counts = new Array(url_arrays.length);
		for (var i = 0; i < url_arrays.length; i++) { this.load_counts[i] = undefined }
		this.start_loading_current_priority();
	},
	
	file_loaded: function(priority, url_index) {
		this.load_counts[priority]++;
		if (this.load_counts[priority] == this.lists_of_urls_to_load[priority].length) {
			if (this.callback_functions[priority]) { this.callback_functions[priority](); }
			if (priority + 1 < this.lists_of_urls_to_load.length) {
				this.current_priority = priority + 1;
				this.start_loading_current_priority();
			} else {
				console.log('File appears to have loaded twice')
			}
		}
	},
	
	create_callbacks: function(priority) {
		var callback_list = []
		for(i = 0; i < this.lists_of_urls_to_load[priority].length; i++) {
			callback_list.push(
				function(prioritized_file_loader, url_priority, url_index) {
					return function(response, urls, load_succeeded) { prioritized_file_loader.file_loaded(url_priority, url_index); }
				}(this, priority, i));
		}
		return callback_list;
	},

	start_loading_current_priority: function() {
		if (this.load_counts[this.current_priority] == undefined) {
			this.load_counts[this.current_priority] = 0;
			if (this.lists_of_urls_to_load[this.current_priority].length) {
			    this.current_file_loader = new FileLoader(this.lists_of_urls_to_load[this.current_priority], this.create_callbacks(this.current_priority));
			} else {
			    if (this.callback_functions[this.current_priority]) { this.callback_functions[this.current_priority](); }
    			if (this.current_priority + 1 < this.lists_of_urls_to_load.length) {
    				this.current_priority = priority + 1;
    				this.start_loading_current_priority();
    			}
			}
		}
		

	}
});

var ModelLoader = Class.create({
	initialize: function(template_url, offset_urls, more_offset_urls, startModelViewerFunction) {
		this.template_url = template_url;
		this.offset_urls = offset_urls;
		this.offset_names = [];
		for (var i = 0; i < this.offset_urls.length; i++) { this.offset_names[i] = this.offset_urls[i].split('/').slice(-1)[0].split('.')[0] }
		this.more_offset_urls = more_offset_urls;
		this.more_offset_names = [];
		for (var i = 0; i < this.more_offset_urls.length; i++) { this.more_offset_names[i] = this.more_offset_urls[i].split('/').slice(-1)[0].split('.')[0] }
		
		this.startModelViewerFunction = startModelViewerFunction;
		this.create_models();
		this.meshes = {}
	},
	
	create_models : function() {
		var template_callback = function(model_loader) { return function() { model_loader.template_loaded(); } }(this);
		var offsets_callback = function(model_loader) { return function() { model_loader.offsets_loaded(); } }(this);
		this.mesh_loader = new PrioritizedFileLoader([[this.template_url], this.offset_urls, this.more_offset_urls], [template_callback, false, offsets_callback]);
	},
	
	create_mesh: function(name, vertices, faces, texture_coordinates) {
		this.meshes[name] = new Mesh(vertices, faces, texture_coordinates);
		this.meshes[name].faces = faces;
		this.meshes[name].name = name;
	},
	
	
	template_loaded : function() {
		this.template_mesh = this.meshes['mean'];
	},
	
	offsets_loaded : function() {
		this.offset_meshes = [];
		for (var i = 0; i < this.offset_urls.length; i++) {
			this.offset_meshes[i] = this.meshes[this.offset_names[i]];
		}
		this.more_offset_meshes = [];
		for (var i = 0; i < this.more_offset_urls.length; i++) {
			this.more_offset_meshes[i] = this.meshes[this.more_offset_names[i]];
		}
		this.current_model = new Model(this.template_mesh, this.offset_meshes, this.more_offset_meshes);
		this.startModelViewerFunction(this.current_model);
	}
})

var ClothingLoader = Class.create({
	initialize: function(clothing_data_directory, clothing_data_files, clothingLoadedFunction) {
		this.clothing_names = Array(clothing_data_files.length);
		this.clothing_urls = Array(clothing_data_files.length);
		for (var i = 0; i < this.clothing_urls.length; i++) { this.clothing_urls[i] = clothing_data_directory + clothing_data_files[i]; }
		for (var i = 0; i < this.clothing_names.length; i++) { this.clothing_names[i] = clothing_data_files[i].split('/').slice(-1)[0].split('.')[0] }
		this.clothingLoadedFunction = clothingLoadedFunction;
		this.clothing_data_directory = clothing_data_directory;
		this.create_models();
		this.meshes = {}
		this.models = [];
	},
	
	create_models : function() {
		var callback = function(clothing_loader) { return function() { clothing_loader.clothing_loaded(); } }(this);
		this.mesh_loader = new PrioritizedFileLoader([this.clothing_urls], [callback]);
	},
	
	create_mesh: function(name, vertices, faces, texture_coordinates) {
		this.meshes[name] = new Mesh(vertices, faces, texture_coordinates);
		this.meshes[name].faces = faces;
		this.meshes[name].name = name;
	},
	
	clothing_loaded : function() {
		this.models = [];
		for (var i = 0; i < this.clothing_urls.length; i++) {
			this.models[i] = new Model(this.meshes[this.clothing_names[i]], [], []);
		}
		this.clothingLoadedFunction(this.models[0]);
	}
})

var Mesh = Class.create({
	initialize: function initialize_mesh (vertices, faces, textures) {
		this.Positions = new Float32Array(ArrayUtil.flatten_two_d_array(vertices));
		var texture_cordinates = textures ? ArrayUtil.flatten_two_d_array(textures.slice(0,vertices.length)) : ArrayUtil.initArray1D(2*vertices.length, 0.7);
		this.TexCoords = new Float32Array(texture_cordinates);
		
		if (faces) {
			var max_index = faces[0][0];
			var min_index = faces[0][0];
			for (var i = 0; i < faces.length; i++) {
				var face=faces[i];
				max_index = Math.max(max_index, face[0], face[1], face[2]);
				min_index = Math.min(min_index, face[0], face[1], face[2]);
			}
			if ((min_index == 1) && (max_index == vertices.length)) { 
			    console.log('vertex indices appear to be 1-index, subtracting 1 from all indices')
				for (var i = 0; i < faces.length; i++) {
					faces[i] = [faces[i][0] - 1, faces[i][1] - 1, faces[i][2] - 1];
				}
			}
			this.Indices = new Uint16Array(ArrayUtil.flatten_two_d_array(faces));
			var vertex_to_face_list = vertices.map(function () { return []} );
			for (var i = 0; i < faces.length; i++) {
				var face=faces[i];
				vertex_to_face_list[face[0]].push(i); vertex_to_face_list[face[1]].push(i); vertex_to_face_list[face[2]].push(i); 
			}
			this.structured = { x:vertices, tri:faces, vrt2tri:vertex_to_face_list };
		} else {
			this.structured = { x:vertices };
		}
	},

});

function cross(a,b) {
		return [a[1]*b[2] - a[2]*b[1], a[2]*b[0] - a[0]*b[2], a[0]*b[1] - a[1]*b[0]];
}
function add(a,b) {
	return [a[0]+b[0], a[1]+b[1], a[2]+b[2]];
}
function sub(a,b) {
	return [a[0]-b[0], a[1]-b[1], a[2]-b[2]];
}

function create_normal_model(template, offset_meshes) {
	var tri=template.structured.tri;
	var vrt2tri=template.structured.vrt2tri;
	var tx=template.structured.x;
	var scaled_normal=new Array(tri.length);
	var dscaled_normal=new Array(offset_meshes.length);
	for(var oo=0; oo<offset_meshes.length; ++oo) {
		dscaled_normal[oo]=new Array(tri.length);
	}
	for(var ii=0; ii < tri.length; ++ii) {
		var t=tri[ii];
		scaled_normal[ii]=cross(sub(tx[t[1]], tx[t[0]]), sub(tx[t[2]], tx[t[0]]));
		
		for(var oo=0; oo<offset_meshes.length; ++oo) {
			var ox=offset_meshes[oo].structured.x;
			dscaled_normal[oo][ii]=add(cross(sub(tx[t[1]], tx[t[0]]), sub(sub(ox[t[2]],tx[t[2]]), sub(ox[t[0]],tx[t[0]]))), 
								   cross(sub(sub(ox[t[1]],tx[t[1]]), sub(ox[t[0]],tx[t[0]])), sub(tx[t[2]], tx[t[0]])));
		}
	}
	var template_normals = ArrayUtil.initArray1D(3*tx.length, 0.0);
	for(var i=0; i<tx.length; ++i) {
		var vertex_faces = template.structured.vrt2tri[i];
		for (var j = 0; j < vertex_faces.length; j++) {
			template_normals[3*i] += scaled_normal[vertex_faces[j]][0];
			template_normals[3*i + 1] += scaled_normal[vertex_faces[j]][1];
			template_normals[3*i + 2] += scaled_normal[vertex_faces[j]][2];
		}
	}

	var dnormals = new Array(offset_meshes.length);
	for(var oo=0; oo<offset_meshes.length; ++oo) {
		dnormals[oo] = ArrayUtil.initArray1D(3*tx.length, 0.0);
		for(var i=0; i<tx.length; ++i) {
			var vertex_faces = template.structured.vrt2tri[i];
			for (var j = 0; j < vertex_faces.length; j++) {
				dnormals[oo][3*i] += dscaled_normal[oo][vertex_faces[j]][0];
				dnormals[oo][3*i + 1] += dscaled_normal[oo][vertex_faces[j]][1];
				dnormals[oo][3*i + 2] += dscaled_normal[oo][vertex_faces[j]][2];
			}
		}
	}
	return {template_point_normals: template_normals, dtemplate_point_normals: dnormals};
}

var Model = Class.create({
	knownOptions : {color:true,textureImage:true,scaleFactors:[],moreScaleFactors:[]},
	options : {},
	mesh : undefined,
	offset_meshes : undefined,
	number_of_offset_meshes : 0,
	
	initialize: function initialize_model(mesh, offset_meshes, more_offset_meshes, optionsInput) {
		normal_model=create_normal_model(mesh, offset_meshes);
		mesh.Normals=new Float32Array(normal_model.template_point_normals);
		
		for(var oo=0; oo<offset_meshes.length; ++oo) {
			offset_meshes[oo].Normals=new Float32Array(normal_model.dtemplate_point_normals[oo]);
		}
		this.mesh = mesh;
		this.offset_meshes = offset_meshes;
		this.number_of_offset_meshes = offset_meshes.length;
		this.options.scaleFactors = Array(this.number_of_offset_meshes);
		for (var i = 0; i < this.number_of_offset_meshes; i++ ) {
			this.options.scaleFactors[i] = 0.0;
		}
		this.more_offset_meshes = more_offset_meshes;
		this.number_of_additional_offset_meshes = more_offset_meshes.length;
		this.options.moreScaleFactors = Array(this.number_of_additional_offset_meshes);
		for (var i = 0; i < this.number_of_additional_offset_meshes; i++ ) {
			this.options.moreScaleFactors[i] = 0.0;
		}
	},
	
	getOption : function getOption(option) {
		if (this.knownOptions[option]) {
			return this.options[option];
		} else {
			throw new Error("Unknown Option: " + option);
		}
	},
    
	setOption : function setOption(option,value) {
		if (this.knownOptions[option]) {
			this.options[option] = value;
		} else {
			throw new Error("Unknown Option: " + option);
		}
	},
    
	setTextureImage : function setTextureImage(image) {
		this.setOption('textureImage',image);
	},
	
	setColor : function setColor(image) {
		this.setOption('color',image);
	},
    
	setScalefactor : function setScalefactor(index, scalefactor) {
		this.options.scaleFactors[index] = scalefactor;
	},
	
	setMoreScalefactor : function setMoreScalefactor(index, scalefactor) {
		this.options.moreScaleFactors[index] = scalefactor;
	},
    
	positions : function positions() {
		return this.mesh.Positions;
	},
	
	indices : function indices() {
		return this.mesh.Indices;
	},
	
	hasNormals : function hasNormals() {
		return this.mesh.Normals ? true : false;
	},
	
	hasTexCoords : function hasTexCoors() {
		return this.mesh.TexCoords ? true : false;
	},
	
	normals : function normals() {
		if (this.hasNormals()) {
			return this.mesh.Normals;
		} else {
			throw new Error("This Model has no Normals");
		}
	},
    
	offset_normals : function offset_normals(index) {
		return this.offset_meshes[index].Normals;
	},
	
	offset_positions : function offset_positions(index) {
		return this.offset_meshes[index].Positions;
	},
	
	texCoords : function texCoords() {
		if (this.hasTexCoords()) {
			return this.mesh.TexCoords;
		} else {
			throw new Error("This Model has no Texture Coordinates");
		}
	},

	attachedGL : undefined,
	vbo : undefined,
	texture : undefined,
	elementVbo : undefined,
	positionsOffset : undefined,
	normalsOffset : undefined,
	positionsOffset : undefined,
	positionsOffsetsOffsets : undefined,
	normalsOffsetsOffsets : undefined,
	texCoordsOffset : undefined,
	shaderProgram : undefined,
	uniformLocations : {},
	attributeLocations : {},
	
	attached_context : function attached_context() {
	    return attachedGL;
	},
	
	deattach : function deattach() {
		gl = this.attachedGL;
		this.attachedGL = false
	},
	
	attach : function attach(gl) {
		console.log('attaching ' + this.mesh.name)
		GLUTIL.checkGLError(gl);
		
		if (this.attachedGL) throw new Error ("Already attached to a gl context");
		this.attachedGL = gl;
		if (this.options.textureImage) {
			//gl.enable(gl.TEXTURE_2D);  
			this.texture = gl.createTexture();  
			gl.bindTexture(gl.TEXTURE_2D, this.texture);  
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.options.textureImage);  
			//gl.texImage2D(gl.TEXTURE_2D, 0, textureImage,true);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
			//gl.generateMipmap(gl.TEXTURE_2D);  
			gl.bindTexture(gl.TEXTURE_2D, null);  
		}   
		GLUTIL.checkGLError(gl);
		
		var vertexShader = GLUTIL.loadShader(gl,'vertex',this.vertexShaderSource());
		var fragmentShader = GLUTIL.loadShader(gl,'fragment',this.fragmentShaderSource() );
		this.shaderProgram = gl.createProgram();
		gl.attachShader(this.shaderProgram, vertexShader);
		gl.attachShader(this.shaderProgram, fragmentShader);
		gl.linkProgram(this.shaderProgram);
		GLUTIL.checkGLError(gl);
		this.setVariableLocations(gl, this.shaderProgram)
		GLUTIL.checkGLError(gl);
		//Create VBO and buffer objects
		this.vbo = gl.createBuffer();
		positions_byte_length = this.positions().byteLength;
		normals_byte_length = this.normals().byteLength;
		
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
		gl.bufferData(gl.ARRAY_BUFFER,
				  positions_byte_length + normals_byte_length + this.texCoords().byteLength + 
				  this.number_of_offset_meshes*positions_byte_length + this.number_of_offset_meshes*normals_byte_length,
				  gl.STATIC_DRAW);
		this.positionsOffset = 0;
		this.normalsOffset = this.positionsOffset + positions_byte_length;
		this.texCoordsOffset = this.normalsOffset + normals_byte_length;
		GLUTIL.checkGLError(gl);
		
		initial_offsets_offset = this.texCoordsOffset + this.texCoords().byteLength;
		this.positionsOffsetsOffsets = Array(this.number_of_offset_meshes);
		this.normalsOffsetsOffsets = Array(this.number_of_offset_meshes);
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			this.positionsOffsetsOffsets[i] = initial_offsets_offset + i*(positions_byte_length + normals_byte_length);
			this.normalsOffsetsOffsets[i] = this.positionsOffsetsOffsets[i] + positions_byte_length;
		}
		GLUTIL.checkGLError(gl);
		gl.bufferSubData(gl.ARRAY_BUFFER, this.positionsOffset, this.positions());
		gl.bufferSubData(gl.ARRAY_BUFFER, this.normalsOffset,   this.normals());
		gl.bufferSubData(gl.ARRAY_BUFFER, this.texCoordsOffset, this.texCoords());
		GLUTIL.checkGLError(gl);
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			gl.bufferSubData(gl.ARRAY_BUFFER, this.positionsOffsetsOffsets[i], this.offset_positions(i));
			gl.bufferSubData(gl.ARRAY_BUFFER, this.normalsOffsetsOffsets[i], this.offset_normals(i));
			GLUTIL.checkGLError(gl);
		}
		GLUTIL.checkGLError(gl);
		
		this.elementVbo = gl.createBuffer();
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.elementVbo);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices(), gl.STATIC_DRAW);
		this.numElements = this.indices().length;
		GLUTIL.checkGLError(gl);
		return this.uniformLocations;
	},
	
	setVariableLocations : function setVariableLocations(gl, shaderProgram) {
		shaderProgram.pMatrixUniform = gl.getUniformLocation(shaderProgram, "uPMatrix");
		shaderProgram.mvMatrixUniform = gl.getUniformLocation(shaderProgram, "uMVMatrix");
		
		this.uniformLocations.worldViewProj = gl.getUniformLocation(shaderProgram, "worldViewProj");
		this.uniformLocations.normalMatrix = gl.getUniformLocation(shaderProgram, "normalMatrix");
		this.uniformLocations.color = gl.getUniformLocation(shaderProgram, "color");
		this.uniformLocations.texture = gl.getUniformLocation(shaderProgram, "textureSampler");
		this.uniformLocations.scaleFactorLocations = Array(this.number_of_offsets_meshes);
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			this.uniformLocations.scaleFactorLocations[i] = gl.getUniformLocation(shaderProgram, "scaleFactor" + (i + 1));
		}
		this.uniformLocations.meanScaleFactorLocation = gl.getUniformLocation(shaderProgram, "meanScaleFactor");
		
		this.attributeLocations.position = gl.getAttribLocation(shaderProgram, "aPosition");
		this.attributeLocations.normal = gl.getAttribLocation(shaderProgram, "aNormal");
		this.attributeLocations.texCoord = gl.getAttribLocation(shaderProgram, "aTexture");
        
		this.attributeLocations.positionsOffsetsAttributeLocations = Array(this.number_of_offset_meshes);
		this.attributeLocations.normalsOffsetsAttributeLocations = Array(this.number_of_offset_meshes);
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			this.attributeLocations.positionsOffsetsAttributeLocations[i] = gl.getAttribLocation(shaderProgram, "aPositionOffsets" + (i + 1));
			this.attributeLocations.normalsOffsetsAttributeLocations[i] = gl.getAttribLocation(shaderProgram, "aNormalOffsets" + (i + 1));
		}

	},
	
	vertexShaderSource : function vertexShaderSource() {
		offset_related_attribute_declarations = [];
		offset_related_uniform_declarations = [];
		position_offsets_addition_expression = [];
		normal_offsets_addition_expression = [];
		for (var i = 1; i <= this.number_of_offset_meshes; i++) {
			offset_related_attribute_declarations.push("attribute vec3 aPositionOffsets" + i + ";");
			offset_related_attribute_declarations.push("attribute vec3 aNormalOffsets" + i + ";");
			offset_related_uniform_declarations.push("uniform float scaleFactor" + i + ";");
			position_offsets_addition_expression.push(" + scaleFactor" + i + " * aPositionOffsets" + i + ".xyz");
			normal_offsets_addition_expression.push(" + scaleFactor" + i + " * aNormalOffsets" + i + ".xyz");
		}
		offset_related_attribute_declarations = offset_related_attribute_declarations.join('\n');
		offset_related_uniform_declarations = offset_related_uniform_declarations.join('\n');
		position_offsets_addition_expression = position_offsets_addition_expression.join('');
		normal_offsets_addition_expression = normal_offsets_addition_expression.join('');
		
		return [
			"#ifdef GL_ES",
			"precision highp float;",
			"#endif",
			"",
			"attribute vec2 aTexture;",
			"attribute vec3 aPosition;",
			"attribute vec3 aNormal;",
			"",
			offset_related_attribute_declarations,
			offset_related_uniform_declarations, 
			"uniform float meanScaleFactor;",
            
			"uniform mat4 worldViewProj;",
			"uniform mat4 normalMatrix;",
			"",
			"varying vec3 vLighting;",
			"varying vec2 vTexture;",
			"",
			"void main() {",
			"  gl_Position = worldViewProj * vec4( meanScaleFactor * aPosition.xyz" + position_offsets_addition_expression + ", 1.0);",
			"  vec3 ambientLight = vec3(0.2, 0.2, 0.2);",
			"  vec3 directionalLightColor = vec3(0.9, 0.9, 0.75);",
			"  vec3 directionalVector = vec3(0.0, 0.0, 1.0);",
			"  vec3 directionalVector2 = 0.41*vec3(1.0, 2.0, 1.0);",
			"  vec3 specDirection = 0.667*vec3(0.5, 1.0, 1.0);",
			"  vec3 normalVector = normalize(vec3( aNormal.xyz" + normal_offsets_addition_expression + " ));",  
			"  vec4 transformedNormal = normalMatrix * vec4(normalVector, 1.0);",
	//		"  float directional = max(dot(transformedNormal.xyz, directionalVector), 0.0);",
	//		 vec4 transformedNormal = normalMatrix * vec4(normalVector, 0.0);",
			"  float directional = abs(dot(transformedNormal.xyz, directionalVector));",
			"  float directional2 = abs(dot(transformedNormal.xyz, directionalVector2));",
			"  float directional3 = pow(max(dot(transformedNormal.xyz, specDirection),0.0), 10.0);",
			"  vLighting = ambientLight + (directionalLightColor * directional) + 0.3*(directionalLightColor * directional2) + 0.6*(directionalLightColor * directional3);",
	//		"  vLighting = ambientLight + (directionalLightColor * directional);",
		  this.texture ? "  vTexture = aTexture;" : "",
			"}",
		].join('\n');
	},
		
	fragmentShaderSource : function fragmentShaderSource() {
		return [
			"#ifdef GL_ES",
	  		"precision highp float;",
	  		"#endif",
			"",
			"varying vec3 vLighting;",
			"varying vec2 vTexture;",
			"",
			"uniform vec4 color;",
			"uniform sampler2D textureSampler;",
			"void main() {",
			this.texture ?
			  "	vec4 col = texture2D(textureSampler, vec2(vTexture.s, vTexture.t));":
			  "	vec4 col = color;",
			"	gl_FragColor = vec4(col.rgb*vLighting,col.a);",
			"}",
		].join('\n');
	},
	
	export_mesh : function export_mesh() {
		var exported_mesh = {
			vertices: this.export_vertices(),
			faces: this.export_faces(),
		}
		return exported_mesh
	},
		
	export_vertices : function export_vertices() {
		template_vertices = this.mesh.structured.x;
		exported_vertices = Array(this.mesh.structured.x.length)
		
		scale_factors = this.options.scaleFactors;
		more_scale_factors = this.options.moreScaleFactors;
		scale_factor_sum = 0.0;
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			scale_factor_sum += scale_factors[i];
		}
		for (var i = 0; i < this.number_of_additional_offset_meshes; i++) {
			scale_factor_sum += more_scale_factors[i];
		}
		template_scale_factor = 1.0 - scale_factor_sum;
		for (i = exported_vertices.length; i;) {
			exported_vertices[--i] = [0.0, 0.0, 0.0];
			template_vertex = template_vertices[i];
			exported_vertices[i] = [template_scale_factor*template_vertex[0], template_scale_factor*template_vertex[1], template_scale_factor*template_vertex[2]]
		}
		for (var j = this.number_of_offset_meshes; j; ) {
			offset_scale_factor = scale_factors[--j];
			offset_vertices = this.offset_meshes[j].structured.x;
			for (i = exported_vertices.length; i;) {
				vertex = exported_vertices[--i];
				offset_vertex = offset_vertices[i];
				vertex[0] += offset_scale_factor*offset_vertex[0];
				vertex[1] += offset_scale_factor*offset_vertex[1];
				vertex[2] += offset_scale_factor*offset_vertex[2];
			}
		}
		for (var j = this.number_of_additional_offset_meshes; j; ) {
			offset_scale_factor = more_scale_factors[--j];
			offset_vertices = this.more_offset_meshes[j].structured.x;
			for (i = exported_vertices.length; i;) {
				vertex = exported_vertices[--i];
				offset_vertex = offset_vertices[i];
				vertex[0] += offset_scale_factor*offset_vertex[0];
				vertex[1] += offset_scale_factor*offset_vertex[1];
				vertex[2] += offset_scale_factor*offset_vertex[2];
			}
		}
		
		return exported_vertices;
	},
	
	export_faces : function export_faces() {
		return this.mesh.structured.tri;
	},
		
	draw : function draw(uniforms) {
		if (! this.attachedGL) throw new Error ("Cannot draw unless attached to a context");
		var gl = this.attachedGL;
		if (! this.programAttached) {
		    this.attachedGL.useProgram(this.shaderProgram);
		    this.setVariableLocations(gl, this.shaderProgram);
		    this.programAttached = true;
		}
        gl.uniformMatrix4fv(this.uniformLocations.worldViewProj, false, uniforms.worldViewProj);
		gl.uniformMatrix4fv(this.uniformLocations.normalMatrix, false, uniforms.normalMatrix);
        
		scale_factor_sum = 0.0;
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
			gl.uniform1f(this.uniformLocations.scaleFactorLocations[i], this.options.scaleFactors[i]);
			scale_factor_sum += this.options.scaleFactors[i];
		}
		
		gl.uniform1f(this.uniformLocations.meanScaleFactorLocation, 1.0 - scale_factor_sum);
		
		if (this.options.color) {
			this.uniformLocations.color = gl.getUniformLocation(this.shaderProgram, "color");
			gl.uniform4fv(this.uniformLocations.color, this.options.color);
		}

		if (this.texture) {
			gl.activeTexture(gl.TEXTURE0);
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.uniform1i(this.uniformLocations.texture,0);
		}
		gl.bindBuffer(gl.ARRAY_BUFFER, this.vbo);
		console.log(this.attributeLocations)
		console.log(this.positionsOffset)
		gl.vertexAttribPointer(this.attributeLocations.position, 3, gl.FLOAT, false, 0, this.positionsOffset);
		gl.enableVertexAttribArray(this.attributeLocations.position);
		
		console.log(this.normalsOffset)
		gl.vertexAttribPointer(this.attributeLocations.normal, 3, gl.FLOAT, false, 0, this.normalsOffset);
		gl.enableVertexAttribArray(this.attributeLocations.normal);
		
		if (this.attributeLocations.texCoord != -1) {
			gl.vertexAttribPointer(this.attributeLocations.texCoord, 2, gl.FLOAT, false, 0, this.texCoordsOffset);
			gl.enableVertexAttribArray(this.attributeLocations.texCoord);
		}
		for (var i = 0; i < this.number_of_offset_meshes; i++) {
//			console.log(attributeLocations.positionsOffsetsAttributeLocations[i])
			gl.vertexAttribPointer(this.attributeLocations.positionsOffsetsAttributeLocations[i], 3, gl.FLOAT, false, 0, this.positionsOffsetsOffsets[i]);
			gl.enableVertexAttribArray(this.attributeLocations.positionsOffsetsAttributeLocations[i]);
//			console.log(attributeLocations.normalsOffsetsAttributeLocations[i])
			gl.vertexAttribPointer(this.attributeLocations.normalsOffsetsAttributeLocations[i], 3, gl.FLOAT, false, 0, this.normalsOffsetsOffsets[i]);
			gl.enableVertexAttribArray(this.attributeLocations.normalsOffsetsAttributeLocations[i]);
			GLUTIL.checkGLError(gl);
		}
        
//		gl.LightModeli(gl.GL_LIGHT_MODEL_TWO_SIDE, gl.GL_TRUE);

		GLUTIL.checkGLError(gl);
		
//		console.log('number of shapes ' + this.positionsOffsetsOffsets.length);
//		console.log('number of elements ' + this.mesh.Indices.length);
//		console.log('name ' + this.mesh.name);
		
		console.log(this.numElements)
		gl.drawElements(gl.TRIANGLES, this.numElements, gl.UNSIGNED_SHORT, 0);
		GLUTIL.checkGLError(gl);
	}
})

var GLUTIL = {
	loadTexture: function(gl, src, callback) {
		var texture = gl.createTexture();
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
		var image = new Image();
		image.onload = function() {
			
			gl.bindTexture(gl.TEXTURE_2D, texture);
			gl.texImage2D(gl.TEXTURE_2D, 0, image, true);
			GLUTIL.checkGLError(gl);
			callback(texture);
		};
		image.src = src;
		return texture;
	},
	loadShader: function(gl, shader_type, shaderSrc) {
		if (shader_type == 'vertex') { 
			var shader = gl.createShader(gl.VERTEX_SHADER);
		} else if (shader_type == 'fragment') {
			var shader = gl.createShader(gl.FRAGMENT_SHADER);
		} else {
			console.log('invalid shader type')
		}
		if (shader == null) {
			throw new Error("Unable to create shader");
		}
		// Load the shader source
		gl.shaderSource(shader, shaderSrc);
		// Compile the shader
		gl.compileShader(shader);
		// Check the compile status
		if (! gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
			var infoLog = gl.getShaderInfoLog(shader);
			console.log(infoLog)
			gl.deleteShader(shader);
			throw new Error("Error compiling shader:\n" + infoLog);
		}
		return shader;
	},
	checkGLError: function(gl) {
		var error = gl.getError();
		if (error != gl.NO_ERROR) {
			console.log("GL Error: " + error);
			throw new Error("GL Error: " + error );
		}
	},
};
