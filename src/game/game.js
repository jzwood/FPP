'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
	FPP.POINTERLOCK.init()
	FPP.LCS.init() //lights, camera, scene THREE.js setup
	FPP.GEOMETRY.init()
	FPP.BUILDSCENE.build()
	FPP.ANIMATE.start()
})
