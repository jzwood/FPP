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

	// @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	window.requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function( /* function */ callback, /* DOMElement */ element) {
			window.setTimeout(callback, 1000 / 60)
		}
	})()

	run.animate = function() {
		requestAnimFrame(run.animate)
		if (FPP.PLAYER.controls.enabled) {
			FPP.GEOMETRY.world.step(run.dt)
			FPP.PLAYER.p2.update() //updates second person during playback
		}

		FPP.GEOMETRY.updateButtons()
		FPP.SKYBOX.update()

		FPP.PLAYER.controls.update(Date.now() - run.time)
		FPP.LCS.renderer.render(FPP.LCS.scene, FPP.LCS.camera)
		run.time = Date.now()
	}

	run.start = function() {
		run.animate()
	}

	return run

})(window, document)
