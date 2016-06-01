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

	/*
	this is one of the the most important method of the game. It makes textered
	quads that obey physics rules.
	*/
	models.makeTile = function(specifications,options) {

		//p, v_norm, width, height, img_path, stretch, wrap_w, wrap_h, rotateY
		specifications.normal.normalize()

		models.textTile2(specifications,options)
		// rotateY = rotateY || 0
		// models.texturedTile(p, normal_vector, rotateY, width, height, img_path, )
		// models.physicsTile(p, normal_vector, rotateY, width, height)
	}

	/* MAKES TEXTURED WALL THAT MATCHES WALL */
	models.texturedTile = function(p, v, ry, width, height, img_path, options){
		// options = {solid:boolean, stretch:boolean, wrap_w:integer, wrap_h:integer}
		models.loader.load(img_path, function(img) {
			if(options.stretch !== true){
				var wrap_w = options.wrap_w || 1,
				wrap_h = options.wrap_h || 1
				img.wrapS = THREE.RepeatWrapping
				img.wrapT = THREE.RepeatWrapping
				img.anisotropy = 1
				img.repeat.set(wrap_w, wrap_h)
			}
			var geometry = new THREE.PlaneGeometry(width, height, 1, 1)
			//geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().copy(wall.quaternion)))
			// geometry.rotateZ(ry)
			geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), v)))

			// if(options.solid){
			// 	models.physicsTile(p, v, geometry.quaternion, width, height)
			// }

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

	models.textTile2 = function(specs, options) {
		models.loader.load(specs.image_path, function(img) {

			var w = 0.5 * specs.width, h = 0.5 * specs.height

			//rotate the tile by theta radians
			// if(false){
			// 	var wp = w * Math.cos(ry) - h * Math.sin(ry), // this is simply rotating points
			// 	hp = w * Math.sin(ry) + h * Math.cos(ry) // around y-axis by theta
			// 	w = wp; h = hp
			// }

			// if (options.stretch !== true) {
			// 	var wrap_w = options.wrap_w || 1,
			// 	wrap_h = options.wrap_h || 1
			// 	img.wrapS = THREE.RepeatWrapping
			// 	img.wrapT = THREE.RepeatWrapping
			// 	img.anisotropy = 1
			// 	img.repeat.set(wrap_w, wrap_h)
			// }

			//this pain-stakingly specifies the vertices of our quad

			// wall vertices
			/*
			var	vertices = [
					-w, -h, 0, // vertex 0
					w, -h, 0, // vertex 1
					-w, h, 0, // vertex 2
					w, h, 0 //	vertex 3
			]
			var v = vertices,
			*/
			var geom = new THREE.Geometry()
			geom.vertices = [  // array of Vector3 giving vertex coordinates
				new THREE.Vector3( w, 0, h ),    // vertex number 0
				new THREE.Vector3( w, 0, -h),   // vertex number 1
				new THREE.Vector3( -w, 0, -h),  // vertex number 2
				new THREE.Vector3( -w, 0, h)   // vertex number 3
			]
			geom.faces = [
				new THREE.Face3( 3, 2, 1),  // bottom face is a quad
				new THREE.Face3( 3, 1, 0)
			]
			geom.computeFaceNormals()
			geom.computeVertexNormals()

			var faceVertexUvs1 = [
        new THREE.Vector2(0,1), new THREE.Vector2(0,0),
        new THREE.Vector2(1,0)
			],
			faceVertexUvs2 = [
        new THREE.Vector2(0,1), new THREE.Vector2(1,0),
        new THREE.Vector2(1,1)
			]

			geom.faceVertexUvs[0].push(faceVertexUvs1, faceVertexUvs2)
			geom.uvsNeedUpdate = true
			geom.buffersNeedUpdate = true

			// var v1 = new THREE.Vector3(v[0], v[1], v[2]),
			// v2 = new THREE.Vector3(v[3], v[4], v[5]),
			// v3 = new THREE.Vector3(v[6], v[7], v[8]),
			// v4 = new THREE.Vector3(v[9], v[10], v[11])
			// geom.vertices.push(v1,v2,v3,v4)
			// console.log(geom.vertices)
			// geom.faces.push(new THREE.Face3(0, 1, 2))
			// geom.faces.push(new THREE.Face3(1, 3, 2))
			// geom.computeFaceNormals()
			//
			// var geometry = new THREE.PlaneGeometry()
			// console.log(geom,geometry)

			geom.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), specs.normal)) )
			//.makeTranslation ( x, y, z )

			var material = new THREE.MeshPhongMaterial({
				map: img,
				side: THREE.DoubleSide //when the game is done CHANGE THIS TO FrontSide !!!!!!!
			})

			var mesh = new THREE.Mesh(geom, material)
			mesh.castShadow = true
			mesh.receiveShadow = true

			// var p = specs.translate
			// mesh.position.set(p.x, p.y, p.z)
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
	models.physicsTile = function(p, v, ry, width, height){
		var wall = new CANNON.Body({
			mass: 0 //makes it a solid immovable structure
		}),

		w = 0.5 * width, h = 0.5 * height

		//rotate the tile by theta radians
		if(ry){
			var wp = w * Math.cos(ry) - h * Math.sin(ry), //this is simply rotating points
			hp = w * Math.sin(ry) + h * Math.cos(ry) // around y-axis by theta
			w = wp; h = hp
		}

		// wall vertices
		var	vertices = [
				-w, -h, 0, // vertex 0
				w, -h, 0, // vertex 1
				-w, h, 0, // vertex 2
				w, h, 0 //	vertex 3
		],

		//the two tri meshes that comprise the rectangle
		tri_a = new CANNON.Trimesh(vertices, [0, 1, 2]),
		tri_b = new CANNON.Trimesh(vertices, [1, 3, 2])
		wall.addShape(tri_a); wall.addShape(tri_b)
		wall.quaternion.setFromVectors(new CANNON.Vec3(0, 0, 1), new CANNON.Vec3(v.x, v.y, v.z))
		wall.position.set(p.x, p.y, p.z)
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
