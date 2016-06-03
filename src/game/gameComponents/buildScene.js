FPP.BUILDSCENE = (function(window, document, undefined) {

	var unit = new function() {

		//helper, origin indicator
		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		// Create a textured quad that is fixed in space and obeys physics
		this.floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }

		this.bwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':Math.PI,'rz':0,'width':30,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':3, 'wrap_h':1 } }

		this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true } }

		this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true } }

		this.wleft = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':5, 'wrap_h':20 } }

		this.wright = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':5, 'wrap_h':20 } }

		this.ceil = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }

		this.btn1 = {'specs': { 'translate' : new THREE.Vector3(0,0.1-10,0), 'path' : './assets/images/btn1.png' }}

	}


	unit.build = function() {
		var axisHelper = new THREE.AxisHelper( 50 )
		FPP.LCS.scene.add( axisHelper )
		FPP.GEOMETRY.world.gravity.set(0,-20,0)

		var makeT = function(name){
			FPP.GEOMETRY.makeTile(name.specs, name.options)
		}

		var makeB = function(name){
			FPP.GEOMETRY.makePressureButton(name.specs)
		}

		makeT(unit.floor)
		makeT(unit.bwall)
		makeT(unit.fLwall)
		makeT(unit.fRwall)
		makeT(unit.wleft)
		makeT(unit.wright)
		makeT(unit.ceil)

		makeB(unit.btn1)
	}

		return unit

	})(window, document)
