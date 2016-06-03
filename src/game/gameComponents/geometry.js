FPP.GEOMETRY = (function(window, document, undefined) {

	var models = new function() {
		this.loader = new THREE.TextureLoader()
		this.world = new CANNON.World()
		this.solver = new CANNON.GSSolver()

		this.solver.iterations = 5; //7
		this.solver.tolerance = 0.1;

		this.buttonMeshes = []

		var split = true
		this.world.solver = split ? new CANNON.SplitSolver(this.solver) : this.solver

	}

	/*
	MAKES INVISIBLE WALL THAT RESPONDS TO PHYSICS
	v must be normalized normal vector to plane
	*/
	models.physicsTile = function(p, width, height, quat) {
		var wall = new CANNON.Body({
			mass: 0 //makes it a solid immovable structure
		}),

		w = 0.5 * width,
		h = 0.5 * height

		// wall vertices
		var vertices = [-w, 0, -h, // vertex 0
			w, 0, -h, // vertex 1
			-w, 0, h, // vertex 2
			w, 0, h //	vertex 3
		],

		//the two tri meshes that comprise the rectangle
		tri_a = new CANNON.Trimesh(vertices, [0, 1, 2]),
		tri_b = new CANNON.Trimesh(vertices, [1, 3, 2])
		wall.addShape(tri_a);
		wall.addShape(tri_b)
		if (quat) wall.quaternion.copy(quat)
		// wall.quaternion.setFromVectors(new CANNON.Vec3(0, 1, 0), new CANNON.Vec3(v.x, v.y, v.z))
		wall.position.set(p.x, p.y, p.z)
		models.world.addBody(wall)

	}

	/* MAKES TEXTURED WALL THAT MATCHES WALL */
	models.makeTile = function(specs, options) {
		models.loader.load(specs.image_path, function(img) {

			var w = 0.5 * specs.width,
			h = 0.5 * specs.height

			if (options.stretch !== true) {
				var wrap_w = options.wrap_w || 1,
				wrap_h = options.wrap_h || 1
				img.wrapS = THREE.RepeatWrapping
				img.wrapT = THREE.RepeatWrapping
				img.anisotropy = 16
				img.magFilter = THREE.LinearFilter
				img.repeat.set(wrap_w, wrap_h)
			}

			//this pain-stakingly specifies the vertices of our quad
			var geom = new THREE.Geometry()
			geom.vertices = [ // array of Vector3 giving vertex coordinates
				new THREE.Vector3(w, 0, h), // vertex number 0
				new THREE.Vector3(w, 0, -h), // vertex number 1
				new THREE.Vector3(-w, 0, -h), // vertex number 2
				new THREE.Vector3(-w, 0, h) // vertex number 3
			]
			geom.faces = [
				new THREE.Face3(1, 2, 3), // bottom face is a quad
				new THREE.Face3(0, 1, 3)
			]
			geom.computeFaceNormals()
			geom.computeVertexNormals()

			var faceVertexUvs1 = [
				new THREE.Vector2(1, 0),
				new THREE.Vector2(0, 0),
				new THREE.Vector2(0, 1)

			],
			faceVertexUvs2 = [
				new THREE.Vector2(1, 1),
				new THREE.Vector2(1, 0),
				new THREE.Vector2(0, 1)
			]

			geom.faceVertexUvs[0].push(faceVertexUvs1, faceVertexUvs2)
			geom.uvsNeedUpdate = true
			geom.buffersNeedUpdate = true

			// var geom = new THREE.PlaneGeometry(specs.width, specs.height, 1, 1)

			var quat = new THREE.Quaternion().setFromEuler(new THREE.Euler(specs.rx, specs.ry, specs.rz, 'XYZ'))
			geom.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(quat))

			var p = specs.translate
			if (options.solid) {
				models.physicsTile(p, specs.width, specs.height, quat)
			}

			// geom.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), specs.normal)))

			var material = new THREE.MeshPhongMaterial({
				map: img,
				side: THREE.FrontSide //when the game is done CHANGE THIS TO FrontSide !!!!!!!
			})

			var mesh = new THREE.Mesh(geom, material)
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

	models.updateButtons = function() {
		var bm = models.buttonMeshes,
		minDist = 3
		for (var i = 0, m = bm.length; i < m; i++) {
			var pb = bm[i].position,
			pp = FPP.PLAYER.sphereBody.position
			if (Math.sqrt(
					(pb.x - pp.x) * (pb.x - pp.x) +
					(pb.y - pp.y) * (pb.y - pp.y) +
					(pb.z - pp.z) * (pb.z - pp.z)) < minDist) {
				if (bm[i].material.color.r !== 0) {
					//green means you're standing on button
					bm[i].material.color = new THREE.Color("#009500")
					// bm[i].material.color.r = 0
					// bm[i].material.color.g = 149
					bm[i].material.needsUpdate = true
				}
			} else {
				if (bm[i].material.color.g !== 0) {
					//red means you're not standing on button
					bm[i].material.color = new THREE.Color("#BBBAA3")
					bm[i].material.needsUpdate = true
				}
			}
		}
	}

	models.makePressureButton = function(specs) {

		//make THREE cylinder with solid color and edges colored
		var tRad = 2.75,
		bRad = 3,
		height = 0.1
		var geometry = new THREE.CylinderGeometry(tRad, bRad, height, 20, 1, false),
		material = new THREE.MeshPhongMaterial({
			color: 0x009500
		}),
		cylinder = new THREE.Mesh(geometry, material)
		var p = specs.translate.clone()
		cylinder.position.set(p.x, p.y, p.z)
		FPP.LCS.scene.add(cylinder)
		var edges = new THREE.EdgesHelper(cylinder, 0x919191)
		FPP.LCS.scene.add(edges)

		//add physical substance to button
		specs.translate.y += 2 * height //we want physical part of button to be a little higher than it actually is for emphasis
		models.physicsTile(specs.translate, tRad, tRad)

		//add texture to top of button
		models.loader.load(specs.path, function(img) {
			var mat = new THREE.MeshPhongMaterial({
				map: img,
				side: THREE.FrontSide
			}),
			dim = 0.9 * 2 * tRad,
			geo = new THREE.PlaneGeometry(dim, dim),
			mesh = new THREE.Mesh(geo, mat)

			mesh.position.set(p.x, p.y + 1.01 * height / 2, p.z)
			mesh.rotation.x -= Math.PI / 2
			mesh.material.transparent = true

			FPP.LCS.scene.add(mesh)

			//keep track of all buttons
			models.buttonMeshes.push(cylinder)
		},
		function(xhr) { // Function called when download progresses
			console.log((xhr.loaded / xhr.total * 100) + '% loaded')
		},
		function(xhr) { // Function called when download errors
			console.log(xhr, 'Texture \"' + specs.path + '\" Load Error Occurred')
		})
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
