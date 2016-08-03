FPP.SKYBOX = (function(window, document, undefined) {


	var sky = new function() {
		this.cubeLoader = new THREE.CubeTextureLoader()
	}

	var makeCables = function(){
		var material = new THREE.LineBasicMaterial({
			color: 0x333333
		});

		var geometry = new THREE.Geometry()
		geometry.vertices.push(
			new THREE.Vector3( 0, 10, -100 ),
			new THREE.Vector3( 0, 10, 500 )
		)

		var line = new THREE.Line( geometry, material )
		FPP.LCS.scene.add( line )
	}

	var makeEarth = function() {
		var earth_texture = './assets/images/skybox/earth.png'
		FPP.GEOMETRY.loader.load(earth_texture, function(img) {

			var geometry = new THREE.SphereGeometry( 25, 32, 32 )
			material = new THREE.MeshPhongMaterial({
				map: img,
				side: THREE.DoubleSide
			})

			sky.earth = new THREE.Mesh(geometry, material)
			sky.earth.castShadow = false
			sky.earth.receiveShadow = false

			sky.earth.position.set(0,500,500)
			sky.earth.rotation.copy(new THREE.Euler(-1.0415075972387453,0.039375342576198576,3.1267351616991386,"XYZ"))
			FPP.LCS.scene.add(sky.earth)

		})
	}

	var makeElevator = function(){
		var geometry = new THREE.ConeGeometry( 0.5, 500, 3 )
		var material = new THREE.MeshBasicMaterial( {color: 0x000000} )
		sky.elevator = new THREE.Mesh( geometry, material )
		sky.elevator.position.set(0,250,500)
		FPP.LCS.scene.add( sky.elevator )
	}

	sky.makeBox = function(){

		makeEarth()
		makeElevator()
		// makeCables() ; // do more with this later (?)

		sky.cubeLoader.setPath( './assets/images/skybox/sky1/' )

		var cubemap = sky.cubeLoader.load([
			'map_04.jpg', 'map_06.jpg',
			'map_08.jpg', 'map_02.jpg',
			'map_05.jpg', 'map_10.jpg'
		])

		var geo = new THREE.BoxGeometry(1000, 1000, 1000),
		skyBoxMaterial = new THREE.MeshBasicMaterial( { envMap: cubemap, side: THREE.BackSide } )

		// create skybox mesh
		sky.space = new THREE.Mesh(
			geo,skyBoxMaterial
		);

		FPP.LCS.scene.add(sky.space)
	}

	sky.update = function() {
		if (sky.space){
			sky.space.position.copy(FPP.PLAYER.firstPerson.position)
		}
		if(sky.earth){
			// sky.earth.rotateX(0.001)
			// sky.earth.rotateY(0.0007)
			sky.earth.position.y = 500 + FPP.PLAYER.firstPerson.position.y

			if(sky.elevator){
				// keeps the elevator pointing towards earth even as it moves
				sky.elevator.geometry.vertices[0].copy(sky.earth.position)
				sky.elevator.geometry.verticesNeedUpdate = true
			}
		}
	}

	sky.init = function() {
		sky.makeBox()
	}

	return sky

})(window, document)
