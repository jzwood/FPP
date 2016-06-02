FPP.SKYBOX = (function(window, document, undefined) {

	var sky = new function(){
		this.geo = new THREE.SphereGeometry(10000, 32, 32)
		this.path = './assets/images/space4.jpg'
	}


	sky.init = function(){
			FPP.GEOMETRY.loader.load(sky.path, function(img) {
				var material = new THREE.MeshPhongMaterial({
					map: img,
					side: THREE.BackSide
				})

				var mesh = new THREE.Mesh(sky.geo, material)
				FPP.LCS.scene.add(mesh)
			},
			function(xhr) { // Function called when download progresses
				console.log((xhr.loaded / xhr.total * 100) + '% loaded')
			},
			function(xhr) { // Function called when download errors
				console.log(xhr, 'Skybox Load Error Occurred')
			})

		}

	return sky

})(window, document)
