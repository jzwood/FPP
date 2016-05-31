FPP.GEOMETRY = (function(window, document, undefined) {

	var models = new function() {
		this.loader = new THREE.TextureLoader()
		this.world = new CANNON.World()
		this.solver = new CANNON.GSSolver()

		this.solver.iterations = 5; //7
		this.solver.tolerance = 0.1;

		var split = true
		this.world.solver = split ? new CANNON.SplitSolver(this.solver) : this.solver

	}

	//return the vector pointing in opposite direction
	models.reverseVector = function(v){
		return {'x':-v.x, 'y':-v.y, 'z':-y.z}
	}

	/*
	this is one of the the most important method of the game. It makes textered
	quads that obey physics rules.
	*/
	models.makeTile = function(p, v_norm, width, height, img_path, stretch, wrap_w, wrap_h) {
		//normalizes the incoming direction vector
		var v = {},
		magnitude = v_norm.i * v_norm.i + v_norm.j * v_norm.j + v_norm.k * v_norm.k,
		epsilon = 0.001
		if (Math.abs(magnitude - 1) > epsilon) { //if magnitude not equal to 1 the vector needs to be normalized
			magnitude = Math.sqrt(magnitude)
			Object.keys(v_norm).map(function(value, index) {
				v[value] = v_norm[value] / magnitude
			})
		} else {
			v = v_norm
		}
		models.texturedTile(p, v, width, height, img_path, stretch, wrap_w, wrap_h)
		models.physicsTile(p, v, width, height)
	}

	/* MAKES TEXTURED WALL THAT MATCHES WALL */
	models.texturedTile = function(p, v, width, height, img_path, stretch, wrap_w, wrap_h){
		models.loader.load(img_path, function(img) {
			if(stretch !== true){
				wrap_w = wrap_w || 1
				wrap_h = wrap_h || 1
				img.wrapS = THREE.RepeatWrapping
				img.wrapT = THREE.RepeatWrapping
				img.anisotropy = 1
				img.repeat.set(wrap_w, wrap_h)
			}
			var geometry = new THREE.PlaneGeometry(width, height, 1, 1)
			//geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().copy(wall.quaternion)))
			geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(v.i, v.j, v.k))))
			var material = new THREE.MeshPhongMaterial({
				map: img,
				side: THREE.DoubleSide //when the game is done CHANGE THIS TO FrontSide !!!!!!!
			})

			var mesh = new THREE.Mesh(geometry, material)
			mesh.castShadow = true
			mesh.receiveShadow = true

			mesh.position.set(p.x, p.y, p.z)
			FPP.LCS.scene.add(mesh)
		},
		function(xhr) { // Function called when download progresses
			console.log((xhr.loaded / xhr.total * 100) + '% loaded')
		},
		function(xhr) { // Function called when download errors
			console.log(xhr, 'Texture Load Error Occurred')
		})
	}

	/*
	MAKES INVISIBLE WALL THAT RESPONDS TO PHYSICS
	v must be normalized normal vector to plane
	*/
	models.physicsTile = function(p, v, width, height){
		var wall = new CANNON.Body({
			mass: 0 //makes it a solid immovable structure
		}),
		w = 0.5 * width, h = 0.5 * height,
		// wall vertices
		vertices = [
			-w, -h, 0, // vertex 0
			w, -h, 0, // vertex 1
			-w, h, 0, // vertex 2
			w, h, 0 //	vertex 3
		],
		//the two tri meshes that comprise the rectangle
		tri_a = new CANNON.Trimesh(vertices, [0, 1, 2]),
		tri_b = new CANNON.Trimesh(vertices, [1, 3, 2])
		wall.addShape(tri_a); wall.addShape(tri_b)

		wall.position.set(p.x, p.y, p.z)
		wall.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), new CANNON.Vec3(v.i, v.j, v.k))

		models.world.addBody(wall)
	}

	models.init = function() {
		//initializing contact material here
		models.groundMaterial = new CANNON.Material("groundMaterial")
		// Adjust constraint equation parameters for ground/ground contact
		models.ground_ground_cm = new CANNON.ContactMaterial(this.groundMaterial, this.groundMaterial, {
			friction: 0.4,
			restitution: 0.3,
			contactEquationStiffness: 1e8,
			contactEquationRelaxation: 3,
			frictionEquationStiffness: 1e8,
			frictionEquationRegularizationTime: 3,
		})
		models.world.quatNormalizeSkip = 0;
		models.world.quatNormalizeFast = false;

		models.world.gravity.set(0, -20, 0);
		models.world.broadphase = new CANNON.NaiveBroadphase()

		models.world.addContactMaterial(models.ground_ground_cm)

	}

	return models

})(window, document)
