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

		FPP.PLAYER.controls.update(Date.now() - run.time)
		//Hack A start
		// FPP.LCS.scene.traverse(function(o) {
		// 	if (o instanceof THREE.Mesh && o.frustumCulled) {
		// 		o.frustumCulled = false;
		// 		o.hadCullingEnabled = true;
		// 	}
		// });
		//Hack A end
		FPP.LCS.renderer.render(FPP.LCS.scene, FPP.LCS.camera)
		//Hack B start
		// FPP.LCS.scene.traverse(function(o) {
		// 	if (o instanceof THREE.Mesh && o.hadCullingEnabled) {
		// 		o.frustumCulled = true;
		// 		delete o.hadCullingEnabled;
		// 	}
		// });
		//Hack B end
		run.time = Date.now()
	}

	run.start = function() {
		run.animate()
	}

	return run

})(window, document)

function animate() {
	requestAnimationFrame(animate)
	if (FPP.BUILDSCENE.controls.enabled) {
		FPP.GEOMETRY.world.step(FPP.ANIMATE.dt)
	}

	FPP.BUILDSCENE.controls.update(Date.now() - FPP.ANIMATE.time)
	//Hack A start
	FPP.LCS.scene.traverse(function(o) {
		if (o instanceof THREE.Mesh && o.frustumCulled) {
			o.frustumCulled = false;
			o.hadCullingEnabled = true;
		}
	});
	//Hack A end
	FPP.LCS.renderer.render(FPP.LCS.scene, FPP.LCS.camera)
	//Hack B start
	FPP.LCS.scene.traverse(function(o) {
		if (o instanceof THREE.Mesh && o.hadCullingEnabled) {
			o.frustumCulled = true;
			delete o.hadCullingEnabled;
		}
	});
	//Hack B end
	FPP.ANIMATE.time = Date.now()
}
