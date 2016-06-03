/*
the spot light shadows causes a "glDrawElements: range out of bounds for buffer"
The clever hack used below to fix this issue is credited to Mantrax @
https://github.com/mrdoob/three.js/issues/5293
*/

FPP.ANIMATE = (function(window, document, undefined) {

	var run = new function() {
		this.dt = 1 / 60
		this.frame = 0
		this.time = Date.now()
	}

	run.animate = function() {
		requestAnimationFrame(run.animate)
		if (FPP.PLAYER.controls.enabled) {
			FPP.GEOMETRY.world.step(run.dt)
		}

		FPP.GEOMETRY.updateButtons()

		FPP.PLAYER.controls.update(Date.now() - run.time)
		FPP.LCS.renderer.render(FPP.LCS.scene, FPP.LCS.camera)
		run.time = Date.now()
	}

	run.start = function() {
		run.animate()
	}

	return run

})(window, document)
