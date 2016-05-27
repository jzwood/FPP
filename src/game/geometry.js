FPP.GEOMETRY = (function(window, document, undefined) {

	var models = new function(){
		this.loader = new THREE.TextureLoader()
		this.world = new CANNON.World()
		this.solver = new CANNON.GSSolver()
		this.groundMaterial = new CANNON.Material("groundMaterial")
		// Adjust constraint equation parameters for ground/ground contact
		this.ground_ground_cm = new CANNON.ContactMaterial(this.groundMaterial, this.groundMaterial, {
			friction: 0.4,
			restitution: 0.3,
			contactEquationStiffness: 1e8,
			contactEquationRelaxation: 3,
			frictionEquationStiffness: 1e8,
			frictionEquationRegularizationTime: 3,
		})
		//player cannon bounding shape
		this.player = new function(){
			var mass = 5,
					radius = 1.3,
					sphereShape = new CANNON.Sphere(radius)

			this.sphereBody = new CANNON.Body({
					mass: mass,
					material: models.groundMaterial
			})

			this.sphereBody.addShape(sphereShape);
			this.sphereBody.position.set(0, 5, 0);
			this.sphereBody.linearDamping = 0.9;
			models.world.addBody(this.sphereBody);
		}


		models.controls = new PointerLockControls(FPP.LCS.camera, models.player.sphereBody)
		FPP.LCS.scene.add(models.controls.getObject())
	}

	models.makePhyicsTile = function(p, vTo, dim, img_path, isTwoSided) {
	  isTwoSided = isTwoSided || false
	      //normalizes the incoming direction vector
	  var v = {},
	      magnitude = vTo.i * vTo.i + vTo.j * vTo.j + vTo.k * vTo.k, //actually = (magnitude^2)
	      epsilon = 0.001
	  if (Math.abs(magnitude - 1) > epsilon) { //if magnitude not equal to 1 the vector needs to be normalized
	      magnitude = Math.sqrt(magnitude)
	      Object.keys(vTo).map(function(value, index) {
	          v[value] = vTo[value] / magnitude
	      })
	  } else {
	      v = vTo
	  }

	  /* WALL A. -- MAKING INVISIBLE WALL THAT RESPONDS TO PHYSICS */
	  var wall = new CANNON.Body({
	          mass: 0 //makes it a solid immovable structure
	      }),
	      // wall vertices
	      os = 0.5, //offset
	      vertices = [
	          0, 0, os, // vertex 0
	          1, 0, os, // vertex 1
	          0, 1, os, // vertex 2
	          1, 1, os //	vertex 3
	      ].map(function(num) {
	          return dim * (num - os)
	      });

	  var tri_a = new CANNON.Trimesh(vertices, [0, 1, 2]),
	      tri_b = new CANNON.Trimesh(vertices, [1, 3, 2])
	  wall.addShape(tri_a)
	  wall.addShape(tri_b)

	  wall.position.set(p.x, p.y, p.z)
	  wall.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), new CANNON.Vec3(v.i, v.j, v.k))

	  models.world.addBody(wall) //added the invisible physics obeying wall
	      /* WALL A. END */
	      /* WALL B. -- MAKING TEXTURED WALL THAT MATCHES WALL A. */
	  models.loader.load(img_path, function(img) {
	          // floor
	          geometry = new THREE.PlaneGeometry(dim, dim, 1, 1)
	          geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().copy(wall.quaternion)))
	          //geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(v.i, v.j, v.k))))
	          material = new THREE.MeshPhongMaterial({
	              map: img,
	              side: isTwoSided ? THREE.DoubleSide : THREE.SingleSide
	          })

	          mesh = new THREE.Mesh(geometry, material)
	          mesh.castShadow = true
	          mesh.receiveShadow = true

	          mesh.position.set(p.x, p.y, p.z)
	          scene.add(mesh) //added the visible wall
	              /* WALL B. END */

	      },
	      function(xhr) { // Function called when download progresses
	          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
	      },
	      function(xhr) { // Function called when download errors
	          console.log(xhr, 'Texture Load Error Occurred')
	      });
	}

	return models

})(window, document)
