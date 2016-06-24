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
		this.bridge2 = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 280.2), 'rx':0,'ry': Math.PI/2,'rz': 0*Math.PI/4, 'width': 40,'height': 3, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.05 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd'} }
		this.walls.push(this.bridge2)

		this.door = { 'specs':{ 'id': 'bridge3-4', 'translate': new THREE.Vector3(0,-12+0.01,290), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.walls.push(this.door)

		this.btn1 = {'specs': { 'id': 'bridge3-4', 'translate' : new THREE.Vector3(0,-40,270), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns.push(this.btn1)

		this.btn2 = {'specs': { 'id': 'bridge3-4', 'translate' : new THREE.Vector3(0,-15+0.01,270), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns.push(this.btn2)

		//LEVEL 3 - 4 BRIDGE
		this.bridge2 = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 190.2), 'rx':0,'ry': Math.PI/2,'rz': 0, 'width': 20,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.2 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge2)

		//LEVEL 2 - 3 BRIDGE
		this.bridge2 = { 'specs':{ 'translate': new THREE.Vector3(0,-17.5, 110), 'rx':-0.2449786631,'ry': Math.PI/2,'rz': 0, 'width': 21,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge2)

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

		//level 1
		var r1w = FPP.ROOM1.walls, r1b = FPP.ROOM1.btns
		for(var w in r1w){ r1w[w].specs.translate.add(FPP.ROOM1.move); makeT(r1w[w]); }
		for(var b in r1b){ r1b[b].specs.translate.add(FPP.ROOM1.move); makeB(r1b[b]); }

		//level 2
		var r2w = FPP.ROOM2.walls, r2b = FPP.ROOM2.btns
		for(var w in r2w){ r2w[w].specs.translate.add(FPP.ROOM2.move); makeT(r2w[w]); }
		for(var b in r2b){ r2b[b].specs.translate.add(FPP.ROOM2.move); makeB(r2b[b]); }

		//level 3
		var r3w = FPP.ROOM3.walls, r3b = FPP.ROOM3.btns
		for(var w in r3w){ r3w[w].specs.translate.add(FPP.ROOM3.move); makeT(r3w[w]); }
		for(var b in r3b){ r3b[b].specs.translate.add(FPP.ROOM3.move); makeB(r3b[b]); }

		//level 4
		var r4w = FPP.ROOM4.walls, r4b = FPP.ROOM4.btns
		for(var w in r4w){ r4w[w].specs.translate.add(FPP.ROOM4.move); makeT(r4w[w]); }
		for(var b in r4b){ r4b[b].specs.translate.add(FPP.ROOM4.move); makeB(r4b[b]); }

		//level 5
		var r5w = FPP.ROOM5.walls, r5b = FPP.ROOM5.btns
		for(var w in r5w){ r5w[w].specs.translate.add(FPP.ROOM5.move); makeT(r5w[w]); }
		for(var b in r5b){ r5b[b].specs.translate.add(FPP.ROOM5.move); makeB(r5b[b]); }

		FPP.LCS.scene.fog = new THREE.Fog(0x686073,1,1415)

		//FPP.GEOMETRY.makeTunnel(5, 5, 40.5, new THREE.Vector3(0,-10.5,41), new THREE.Vector3(-Math.PI/2 + 0.25 , Math.PI/4,0))

	}

		return unit

	})(window, document)
