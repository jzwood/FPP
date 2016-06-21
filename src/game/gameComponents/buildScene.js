FPP.BUILDSCENE = (function(window, document, undefined) {

	var unit = new function() {

		//helper, origin indicator
		var geometry = new THREE.SphereGeometry( 0.5, 32, 32 )
		var material = new THREE.MeshLambertMaterial( {color: 0xffffff} )
		var sphere = new THREE.Mesh( geometry, material )
		FPP.LCS.scene.add( sphere )

		this.walls = []
		this.btns = []

		this.room2 = []
		this.btns2 = []

		this.room3 = []
		this.btns3 = []

		//LEVEL THREE
		this.fLwall3 = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.fLwall3)

		this.fCwall3 = { 'specs':{ 'translate': new THREE.Vector3(0, 2, 29.99), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.fCwall3)

		this.fRwall3 = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
		this.room3.push(this.fRwall3)

		this.bLwall3 = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.bLwall3)

		this.bCwall3 = { 'specs':{ 'translate': new THREE.Vector3(0, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15,
		'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.3, side: THREE.DoubleSide })
		}, 'options' : { 'solid':false, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.bCwall3)

		this.bRwall3 = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
		this.room3.push(this.bRwall3)

		this.a3 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 60, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
		this.room3.push(this.a3)

		this.b3 = { 'specs':{ 'translate': new THREE.Vector3(15, -2.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room3.push(this.b3)

		this.c3 = { 'specs':{ 'translate': new THREE.Vector3(-15, -2.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room3.push(this.c3)

		this.d3 = { 'specs':{ 'translate': new THREE.Vector3(0, 5, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 60, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.room3.push(this.d3)

		this.cage1 = { 'specs':{'translate': new THREE.Vector3(0,-5.5,10), 'rx':Math.PI/2,'ry':0,'rz':0,'width':6,'height': 9, 'image_path': './assets/images/bh.png','mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3, side: THREE.DoubleSide })
		}, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.cage1)

		this.cage2 = { 'specs':{'translate': new THREE.Vector3(0,-5.5,16), 'rx':Math.PI/2,'ry':0,'rz':0,'width':6,'height': 9, 'image_path': './assets/images/bh.png' ,'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3, side: THREE.DoubleSide })
		}, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.cage2)

		this.cage3 = { 'specs':{'translate': new THREE.Vector3(3,-5.5,13), 'rx':Math.PI/2,'ry':0,'rz':Math.PI/2,'width':6,'height': 9, 'image_path': './assets/images/bh.png' ,'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3, side: THREE.DoubleSide })
		}, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.cage3)

		this.cage4 = { 'specs':{'translate': new THREE.Vector3(-3,-5.5,13), 'rx':Math.PI/2,'ry':0,'rz':Math.PI/2,'width':6,'height': 9, 'image_path': './assets/images/bh.png', 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3, side: THREE.DoubleSide })
		}, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.cage4)

		this.door3i = { 'specs':{ 'id': 3, 'translate': new THREE.Vector3(0,-10+0.01,0), 'rx':0,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.door3i)

		this.btn3i = {'specs': { 'id': 3, 'translate' : new THREE.Vector3(0,-10+0.01,-10), 'path' : './assets/images/btn1.png' , 'isSbutton': false}}
		this.btns3.push(this.btn3i)

		this.btn3ii= {'specs': { 'id': 4, 'translate' : new THREE.Vector3(0,-10+0.01,13), 'path' : './assets/images/btn1.png' , 'isSbutton': false}}
		this.btns3.push(this.btn3ii)

		this.door3ii = { 'specs':{ 'id': 4, 'translate': new THREE.Vector3(0, -5.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
		this.room3.push(this.door3ii)

		//LEVEL 2 - 3 BRIDGE
		this.bridge2 = { 'specs':{ 'translate': new THREE.Vector3(0,-17.5, 110), 'rx':-0.2449786631,'ry': Math.PI/2,'rz': 0, 'width': 21,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.5 , side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'side': 'd' } }
		this.walls.push(this.bridge2)

		//LEVEL 1 - 2 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 40), 'rx':(0.24497866312686414),'ry': Math.PI/2,'rz': 0, 'width': (41.5),'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true, opacity: 0.3, side: THREE.DoubleSide
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

		for(var w in unit.room2){
			unit.room2[w].specs.translate.add(new THREE.Vector3(0,-10,80))
			makeT(unit.room2[w])
		}

		for(var b in unit.btns2){
			unit.btns2[b].specs.translate.add(new THREE.Vector3(0,-10,80))
			makeB(unit.btns2[b])
		}

		for(var w in unit.room3){
			unit.room3[w].specs.translate.add(new THREE.Vector3(0,-5,150.2+ 50))
			makeT(unit.room3[w])
		}

		for(var b in unit.btns3){
			unit.btns3[b].specs.translate.add(new THREE.Vector3(0,-5,150.2 + 50))
			makeB(unit.btns3[b])
		}

		FPP.LCS.scene.fog = new THREE.Fog(0x686073,1,1415)

		//FPP.GEOMETRY.makeTunnel(5, 5, 40.5, new THREE.Vector3(0,-10.5,41), new THREE.Vector3(-Math.PI/2 + 0.25 , Math.PI/4,0))


	}

		return unit

	})(window, document)
