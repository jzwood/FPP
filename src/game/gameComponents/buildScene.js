FPP.BUILDSCENE = (function(window, document, undefined) {

	var unit = new function() {

		//helper, origin indicator
		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		// Create a textured quad that is fixed in space and obeys physics
		this.floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 60, 'image_path': './assets/images/checker2.png' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':10, 'wrap_h':20 } }

		this.wleft = { 'specs':{ 'translate': new THREE.Vector3(15, -2.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/checker2.png' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':5, 'wrap_h':20 } }

		this.wright = { 'specs':{ 'translate': new THREE.Vector3(-15, -2.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/checker2.png' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':5, 'wrap_h':20 } }

		this.ceil = { 'specs':{ 'translate': new THREE.Vector3(0, 5, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 60, 'image_path': './assets/images/checker2.png' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':10, 'wrap_h':20 } }

		
	}


	unit.build = function() {
		var axisHelper = new THREE.AxisHelper( 50 )
		FPP.LCS.scene.add( axisHelper )
		FPP.GEOMETRY.world.gravity.set(0,-20,0)

		var make = function(name){
			FPP.GEOMETRY.makeTile(name.specs, name.options)
		}

		make(unit.floor)
		make(unit.wleft)
		make(unit.wright)
		make(unit.ceil)
	}

		return unit

	})(window, document)
