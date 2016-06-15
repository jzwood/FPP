FPP.SKYBOX = (function(window, document, undefined) {


	var sky = new function() {
		this.cubeLoader = new THREE.CubeTextureLoader()
	}

	sky.makeBox = function(){

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
	}

	sky.init = function() {
		sky.makeBox()
	}

	return sky

})(window, document)
