FPP.PLAYER = (function(window, document, undefined) {

	var player = new function(){

		var mass = 5,
		radius = 1.3,
		sphereShape = new CANNON.Sphere(radius)

		this.sphereBody = new CANNON.Body({
			mass: mass,
			material: FPP.GEOMETRY.groundMaterial
		})
		this.sphereBody.addShape(sphereShape)
		this.sphereBody.position.set(-15, 0, 0)
		this.sphereBody.linearDamping = 0.9
	}

	document.addEventListener('keydown', function(e){
		// console.log(e.keyCode)
		if(e.keyCode === 69){
			FPP.PLAYER.sphereBody.position.y += -5
		}
	})

	player.init = function(){

		FPP.GEOMETRY.world.addBody(player.sphereBody)

		player.controls = new PointerLockControls(FPP.LCS.camera, player.sphereBody)
		FPP.LCS.scene.add(player.controls.getObject())
	}

	return player

})(window, document)
