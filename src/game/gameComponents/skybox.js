FPP.SKYBOX = (function(window, document, undefined) {

	var sky = new function(){
		this.geo = new THREE.SphereGeometry(10000, 32, 32)
		this.path = './assets/images/space4.jpg'
	}

	sky.update = function(){
		if(sky.star)sky.star.rotateY(0.001)//ship slowly rotates in space
	}

	sky.drawBox = function(geo, path, spin, i, translate){
		var s = {'b': THREE.BackSide, 'd': THREE.DoubleSide, 'f': THREE.FrontSide}
		FPP.GEOMETRY.loader.load(path, function(img) {
			var material = new THREE.MeshPhongMaterial({
				map: img,
				side: s[i]
			})
			var mesh = new THREE.Mesh(geo, material)
			if(translate) mesh.position.add(translate)
			if(spin) sky.star =  mesh
			FPP.LCS.scene.add(mesh)
		},
		function(xhr) { // Function called when download progresses
			console.log((xhr.loaded / xhr.total * 100) + '% loaded')
		},
		function(xhr) { // Function called when download errors
			console.log(xhr, 'Skybox Load Error Occurred')
		})
	}

	sky.init = function(){
		sky.drawBox(sky.geo,sky.path, true, 'b')
		sky.drawBox(new THREE.SphereGeometry(30, 12, 12), './assets/images/floor5.jpg', false, 'f')
		//sky.drawBox(new THREE.SphereGeometry(30, 12, 12), './assets/images/floor5.jpg', false, 'd', new THREE.Vector3(0,-10,80))

		}

	return sky

})(window, document)
