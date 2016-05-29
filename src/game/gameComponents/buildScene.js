FPP.BUILDSCENE = (function(window, document, undefined) {

	var structures = new function() {
		// Create a textured quad that is fixed in space and obeys physics
		this.floor = {
			pos: {
				'x': 0,
				'y': -20,
				'z': 0
			},
			normal: {
				'i': 0,
				'j': 1,
				'k': 0
			},
			width: 100,
			height: 100,
			//image_path: './assets/images/test.jpg'
			image_path: './assets/images/checker2.png',
			stretch: false,
			ww: 50,
			wh: 50
		}
	}

	//player cannon bounding shape
	structures.player = new function() {
		var mass = 5,
		radius = 1.3,
		sphereShape = new CANNON.Sphere(radius)

		this.sphereBody = new CANNON.Body({
			mass: mass,
			material: FPP.GEOMETRY.groundMaterial
		})

		this.sphereBody.addShape(sphereShape)
		this.sphereBody.position.set(0, 5, 0)
		this.sphereBody.linearDamping = 0.9
		FPP.GEOMETRY.world.addBody(this.sphereBody)
	}

	structures.build = function() {
		var fs = structures.floor
		FPP.GEOMETRY.makePhyicsTile(fs.pos, fs.normal,
			fs.width, fs.height, fs.image_path, fs.stretch, fs.ww, fs.wh)

			structures.controls = new PointerLockControls(FPP.LCS.camera, structures.player.sphereBody)
			FPP.LCS.scene.add(structures.controls.getObject())
		}

		return structures

	})(window, document)
