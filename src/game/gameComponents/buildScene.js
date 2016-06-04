FPP.BUILDSCENE = (function(window, document, undefined) {

	var unit = new function() {

		//helper, origin indicator
		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		this.walls = []
		this.btns = []

		// Create a textured quad that is fixed in space and obeys physics
		this.floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.walls.push(this.floor)

		this.bwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':Math.PI,'rz':0,'width':30,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':3, 'wrap_h':1 } }
		this.walls.push(this.bwall)

		this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.walls.push(this.fLwall)

		this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'doubleside': true } }
		this.walls.push(this.fRwall)

		this.wleft = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.walls.push(this.wleft)

		this.wright = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.walls.push(this.wright)

		this.ceil = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.walls.push(this.ceil)

		this.door1 = { 'specs':{ 'id': 1, 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.walls.push(this.door1)

		this.btn1 = {'specs': { 'id': 1, 'translate' : new THREE.Vector3(0,0.1-10,0), 'path' : './assets/images/btn1.png' }}
		this.btns.push(this.btn1)
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

		for(var w in unit.walls){
			makeT(unit.walls[w])
		}

		for(var b in unit.btns){
			makeB(unit.btns[b])
		}
	}

		return unit

	})(window, document)
