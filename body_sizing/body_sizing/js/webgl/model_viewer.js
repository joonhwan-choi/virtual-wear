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


var ModelViewer = Class.create({
    
    

    initialize: function(in_models, canvas, controller, do_not_draw_yet) {
        var gl = WebGLDebugUtils.makeDebugContext(canvas.getContext("experimental-webgl"));

        var models = [];
        var model_is_hidden = [];
        var currentController;
        var self = this;
        var orig_draw = this.draw;
        this.init(gl, canvas);
        for (var i = 0; i < in_models.length; i++) {
            models.push(in_models[i]);
            models[i].attach(gl);
			model_is_hidden.push(false)
        }
        this.repaint = function () {
            console.log(['canvas height', canvas.height]);
            console.log(['canvas width', canvas.width]);

            function alertDialogBox() {

                alert("확인을 누를 때까지 다른 작업을 할 수 없어요!");

            }
            var options = {
              xRot: controller.xRot,
              yRot: controller.yRot,
              width: canvas.width,
              height: canvas.height,
              models: models,
              model_is_hidden: model_is_hidden,
            };
            orig_draw(gl,options);
        };
        this.clear = function() {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        };
        this.disconnect = function () {
            controller.remove_viewer(self.repaint);
        }

        this.attach = function (controller) {
            if (currentController) {
               self.disconnect();
            }
            currentController = controller;
            currentController.add_viewer(self.repaint);
        }
        
        this.models_list = function() {
            return models
        }

        this.add_model = function(model, hide_model) {
			GLUTIL.checkGLError(gl);
            model.attach(gl);
			models.push(model);
			model_is_hidden.push(hide_model ? true : false)
        }

		this.remove_model = function(model) {
			pruned_models = [];
			pruned_model_is_hidden = [];
			for (i = 0; i < models.length; i++) { 
				if (models[i] !== model) {
					pruned_models.push(models[i]);
					pruned_model_is_hidden.push(model_is_hidden[i]);
				} else {
					model.deattach();
					console.log('removed model:')
					console.log(model)
				}
			}
			models = pruned_models;
			model_is_hidden = pruned_model_is_hidden;
		}
		
		this.show_model = function(model) {
			for (i = 0; i < models.length; i++) { 
				if (models[i] === model) { model_is_hidden[i] = false; }
			}
		}
		
		this.hide_model = function(model) {
			for (i = 0; i < models.length; i++) { 
				console.log('checking!')
				if (models[i] === model) { model_is_hidden[i] = true; }
			}
		}
		
        this.set_models = function(model_list) {
			GLUTIL.checkGLError(gl);
			models = model_list;
        }	    

        this.enable = function enable(property) {
            gl.enable(gl[property]);
        };
        this.disable = function enable(property) {
            gl.enable(gl[property]);
        };
        this.attach(controller);
        if (! do_not_draw_yet) { this.repaint(); }
        return true;
    },

    init: function(gl, canvas) {
//        gl.clearColor(0.3, 0.3, 0.3, 1.0);
        gl.clearColor(0.0, 0.0, 0.0, 1.0);
        gl.clearDepth(1.0);

        GLUTIL.checkGLError(gl);
        gl.enable(gl.DEPTH_TEST);
        gl.enable(gl.BLEND);
        gl.enable(gl.CULL_FACE);
        gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
        GLUTIL.checkGLError(gl);
        gl.depthFunc(gl.LEQUAL);
        GLUTIL.checkGLError(gl);
    },
    
    
    

    draw: function draw(gl,options) { // Draw the picture
        GLUTIL.checkGLError(gl);
//        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
	gl.viewport(0, 0, options.width, options.height);        
        GLUTIL.checkGLError(gl);

        var model = new Matrix4x4();
        var view = new Matrix4x4();
        var projection = new Matrix4x4();

        GLUTIL.checkGLError(gl);
        projection.loadIdentity();
        projection.perspective(45, options.width / options.height, 0.1, 100);
//        projection.perspective(45, 1, 0.5, 10);
    
        GLUTIL.checkGLError(gl);
        // Add in  rotation
        model.loadIdentity();
        model.translate(0.0, -1.0, -3.0);
        model.rotate(options.xRot, 1, 0, 0);
        model.rotate(options.yRot, 0, 1, 0);
//        model.rotate(175, 0, 1, 0);
//        model.rotate(90, 1, 0, 0);

        GLUTIL.checkGLError(gl);
        
        var mvp = new Matrix4x4();
        mvp.multiply(model);
        mvp.multiply(projection);
        var worldInverseTranspose = model.inverse();
        worldInverseTranspose.transpose();
        var viewInverse = view.inverse();
        var normalMatrix = new Matrix4x4().multiply(model).inverse().transpose();

        GLUTIL.checkGLError(gl);

        var uniforms = {
            world: new Float32Array(model.elements),
            worldInverseTranspose: new Float32Array(worldInverseTranspose.elements),
            worldViewProj: new Float32Array(mvp.elements),
            viewInverse: new Float32Array(viewInverse.elements),
            normalMatrix: new Float32Array(normalMatrix.elements),
        };
        
        for (var i = 0; i < options.models.length; i++) {
//			gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT)
            if (! options.model_is_hidden[i]) { options.models[i].draw(uniforms); }
            GLUTIL.checkGLError(gl);
        }

        gl.flush();
        GLUTIL.checkGLError(gl);
    },
});

