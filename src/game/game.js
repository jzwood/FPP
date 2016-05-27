'use strict';

document.addEventListener("DOMContentLoaded", function(event) {
	FPP.LCS.init() //lights, camera, scene THREE.js setup
	FPP.POINTERLOCK.init()
	FPP.GEOMETRY.init()
	FPP.BUILDSCENE.build()
	FPP.ANIMATE.start()
})
