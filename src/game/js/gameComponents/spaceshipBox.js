FPP.SHIPBOX = (function(window, document, undefined) {

	var shipbox = new function(){
		this.geo = new THREE.SphereGeometry(500, 20, 20)
		this.path = '../assets/images/skybox/grid.png'
	}

	shipbox.update = function(){
		if(shipbox.mesh)shipbox.mesh.rotateY(0.001)//ship slowly rotates in space
	}

	shipbox.init = function(){
			FPP.GEOMETRY.loader.load(shipbox.path, function(img) {
        img.wrapS = THREE.RepeatWrapping
        img.wrapT = THREE.RepeatWrapping
        img.anisotropy = 16
        img.repeat.set(1,4)
				var material = new THREE.MeshPhongMaterial({
					map: img,
          transparent: true,
					side: THREE.DoubleSide
				})

				shipbox.mesh = new THREE.Mesh(shipbox.geo, material)
				FPP.LCS.scene.add(shipbox.mesh)
			},
			function(xhr) { // Function called when download progresses
				console.log((xhr.loaded / xhr.total * 100) + '% loaded')
			},
			function(xhr) { // Function called when download errors
				console.log(xhr, 'Skybox Load Error Occurred')
			})

		}()

	return shipbox

})(window, document)
