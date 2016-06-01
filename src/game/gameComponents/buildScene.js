FPP.BUILDSCENE = (function(window, document, undefined) {

	var structures = new function() {

		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		// Create a textured quad that is fixed in space and obeys physics
		this.tile_1 = {
			'specs':{
				translate: new THREE.Vector3(0, 0, 0),
				normal: new THREE.Vector3(0, 1, 0),
				width: 10, height: 40,
				image_path: './assets/images/checker2.png'
			},
			'options' : {
				'solid':true, 'stretch':false, 'wrap_w':5, 'wrap_h':20
			}
		}

	}

	structures.build = function() {
		var axisHelper = new THREE.AxisHelper( 50 )
		FPP.LCS.scene.add( axisHelper )

		// FPP.GEOMETRY.world.gravity.set(0,-20,0)
		FPP.GEOMETRY.world.gravity.set(0,0,0)

		// var fs = structures.tile_1
		// FPP.GEOMETRY.makeTile(fs.translate, fs.normal,
		// 	fs.width, fs.height, fs.image_path, fs.stretch, fs.ww, fs.wh, 0)

		fs = structures.tile_1
		FPP.GEOMETRY.makeTile(fs.specs, fs.options)
	}

		return structures

	})(window, document)
