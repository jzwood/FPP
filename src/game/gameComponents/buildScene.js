FPP.BUILDSCENE = (function(window, document, undefined) {

	var structures = new function() {

		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )


		// Create a textured quad that is fixed in space and obeys physics
		this.tile_1 = {
			pos: {'x': 0,'y': 0,'z': 20},
			normal: {'i': 0,'j': -1,'k': -20},
			width: 20, height: 5,
			image_path: './assets/images/checker2.png',
			stretch: false, ww: 4, wh: 1
		}
	}

	structures.transformTile = function(theta, tile){
		var radius = 0.5 * tile.width / Math.tan(Math.PI/6)
		var newTile = JSON.parse(JSON.stringify(tile))
		newTile.pos.x = radius * Math.cos(theta)
		newTile.pos.z = radius * Math.sin(theta)
		newTile.normal.i = -newTile.pos.x
		newTile.normal.j =  -newTile.pos.y
		newTile.normal.k = -newTile.pos.z
		return newTile
	}

	structures.build = function() {
		var axisHelper = new THREE.AxisHelper( 50 )
		FPP.LCS.scene.add( axisHelper )

		FPP.GEOMETRY.world.gravity.set(-20,0,0)
		FPP.LCS.camera.up.set(1,0,0)
		FPP.LCS.camera.lookAt(new THREE.Vector3(0,0,1))

		for(var i=0; i< 6; i++){
		var fs = structures.transformTile(Math.PI/3 * i, structures.tile_1)
		FPP.GEOMETRY.makeTile(fs.pos, fs.normal,
			fs.width, fs.height, fs.image_path, fs.stretch, fs.ww, fs.wh)
		}

	}

		return structures

	})(window, document)
