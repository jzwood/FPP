FPP.ANIMATE = (function(){

	var run = new function(){
		this.dt = 1 / 60
		this.frame = 0
		this.ctrls = FPP.BUILDSCENE.controls
		this.draw = FPP.LCS.renderer
		this.time = Date.now()
		this.sc = FPP.LCS.scene
		this.cam = FPP.LCS.camera
	}


	var animate = function() {

	    requestAnimationFrame(animate)
	    if (run.ctrls.enabled) {
	        FPP.GEOMETRY.world.step(run.dt);

	        // Update box positions
	        // for (var i = 0; i < boxes.length; i++) {
	        //     boxMeshes[i].position.copy(boxes[i].position);
	        //     boxMeshes[i].quaternion.copy(boxes[i].quaternion);
	        // }
	    }

	    run.ctrls.update(Date.now() - run.time)
	    run.draw.render(run.scene, run.cam)
	    run.time = Date.now()

	}

	run.start = function(){
		run.animate()
	}


})
