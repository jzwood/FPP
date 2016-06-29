FPP.BUILDSCENE = (function(window, document, undefined) {

	var unit = new function() {

		//helper, origin indicator
		var geometry = new THREE.SphereGeometry( 1000, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		this.walls = []
		this.btns = []


		//LEVEL 3 - 4 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 270.2), 'rx':0,'ry': Math.PI/2,'rz': 0*Math.PI/4, 'width': 60,'height': 3, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.05, side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd'} }
		this.walls.push(this.bridge)

		this.door = { 'specs':{ 'id': 'bridge3-4', 'translate': new THREE.Vector3(0,-12+0.01,290), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.walls.push(this.door)

		this.btn1 = {'specs': { 'id': 'bridge3-4', 'translate' : new THREE.Vector3(0,-40,270), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns.push(this.btn1)

		this.btn2 = {'specs': { 'id': 'bridge3-4', 'translate' : new THREE.Vector3(0,-15+0.01,270), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns.push(this.btn2)

		//LEVEL 3 - 4 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 190.2), 'rx':0,'ry': Math.PI/2,'rz': 0, 'width': 20,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.2 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge)

		//LEVEL 2 - 3 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-17.5, 110), 'rx':-0.2449786631,'ry': Math.PI/2,'rz': 0, 'width': 21,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge)

		//LEVEL 1 - 2 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 40), 'rx':(0.24497866312686414),'ry': Math.PI/2,'rz': 0, 'width': (41.5),'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.4, side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge)

	}


	unit.build = function() {
		var axisHelper = new THREE.AxisHelper( 50 )
		FPP.LCS.scene.add( axisHelper )
		FPP.GEOMETRY.world.gravity.set(0,-20,0)

		var makeT = function(name){ FPP.GEOMETRY.makeTile(name.specs, name.options); }
		var makeB = function(name){ FPP.GEOMETRY.makePressureButton(name.specs); }

		//bridges
		for(var w in unit.walls){ makeT(unit.walls[w]); }
		for(var b in unit.btns){ makeB(unit.btns[b]); }

		var lastRoomNum = 6
		for(var i=1; i<=lastRoomNum; i++){
			var rn = "ROOM" + i,
			rw = FPP[rn].walls, rb = FPP[rn].btns
			for(var w in rw){ rw[w].specs.translate.add(FPP[rn].move); makeT(rw[w]); }
			for(var b in rb){ rb[b].specs.translate.add(FPP[rn].move); makeB(rb[b]); }
		}

		FPP.LCS.scene.fog = new THREE.Fog(0x686073,1,1415)

		//FPP.GEOMETRY.makeTunnel(5, 5, 40.5, new THREE.Vector3(0,-10.5,41), new THREE.Vector3(-Math.PI/2 + 0.25 , Math.PI/4,0))

	}

		return unit

	})(window, document)
