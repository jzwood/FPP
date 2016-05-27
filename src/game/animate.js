FPP.ANIMATE = (function(window, document, undefined) {

	var run = new function() {
		this.dt = 1 / 60
		this.frame = 0
		this.time = Date.now()
	}

	run.animate = function(){
		requestAnimationFrame(run.animate)
		if (FPP.BUILDSCENE.controls.enabled) {
			FPP.GEOMETRY.world.step(run.dt)

			// Update box positions
			// for (var i = 0; i < boxes.length; i++) {
			//     boxMeshes[i].position.copy(boxes[i].position);
			//     boxMeshes[i].quaternion.copy(boxes[i].quaternion);
			// }
		}

		FPP.BUILDSCENE.controls.update(Date.now() - run.time)
		FPP.LCS.renderer.render(FPP.LCS.scene, FPP.LCS.camera)
		run.time = Date.now()
	}

	run.start = function() {
		run.animate()
	}

	return run

})(window, document)
