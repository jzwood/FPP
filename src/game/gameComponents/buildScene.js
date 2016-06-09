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
		this.fLwall3 = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room3.push(this.fLwall3)

		this.fRwall3 = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'doubleside': true } }
		this.room3.push(this.fRwall3)

		this.bLwall3 = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room3.push(this.bLwall3)

		this.bCwall3 = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9,
		'mat': new THREE.MeshPhongMaterial( {
			transparent: true,
			opacity: 0.8 ,
			side: THREE.DoubleSide
			})
		}, 'options' : { 'solid':false, 'stretch':true , 'doubleside': true} }
		this.room3.push(this.bCwall3)

		this.bRwall3 = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'doubleside': true } }
		this.room3.push(this.bRwall3)

		this.door3 = { 'specs':{ 'id': 3, 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room3.push(this.door3)

		this.a3 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.room3.push(this.a3)

		this.b3 = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room3.push(this.b3)

		this.c3 = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room3.push(this.c3)

		this.d3 = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.room3.push(this.d3)

		this.btn3a = {'specs': { 'id': 3, 'translate' : new THREE.Vector3(0,0.1-10,-5), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns3.push(this.btn3a)

		this.btn3b = {'specs': { 'id': 3, 'translate' : new THREE.Vector3(0,0.1-10,5), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns3.push(this.btn3b)

		//LEVEL 2 - 3 BRIDGE
		this.bridge2 = { 'specs':{ 'translate': new THREE.Vector3(0,-17.5, 110), 'rx':-0.2449786631,'ry': Math.PI/2,'rz': 0, 'width': 21,'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true,
			opacity: 0.5 ,
			side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'doubleside': true } }
		this.walls.push(this.bridge2)

		//LEVEL TWO
		this.fLwall2 = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room2.push(this.fLwall2)

		this.fRwall2 = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'doubleside': true } }
		this.room2.push(this.fRwall2)

		this.bLwall2 = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room2.push(this.bLwall2)

		this.bCwall2 = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9,
		'mat': new THREE.MeshPhongMaterial( {
			transparent: true,
			opacity: 0.8 ,
			side: THREE.DoubleSide
			})
		}, 'options' : { 'solid':false, 'stretch':true , 'doubleside': true} }
		this.room2.push(this.bCwall2)

		this.bRwall2 = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'doubleside': true } }
		this.room2.push(this.bRwall2)

		this.door2 = { 'specs':{ 'id': 2, 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'doubleside': true} }
		this.room2.push(this.door2)

		this.a2 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.room2.push(this.a2)

		this.b2 = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room2.push(this.b2)

		this.c2 = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
		this.room2.push(this.c2)

		this.d2 = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
		this.room2.push(this.d2)

		this.btn2a = {'specs': { 'id': 2, 'translate' : new THREE.Vector3(-5,0.1-10,0), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns2.push(this.btn2a)

		this.btn2b = {'specs': { 'id': 2, 'translate' : new THREE.Vector3(5,0.1-10,0), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
		this.btns2.push(this.btn2b)

		//LEVEL 1 - 2 BRIDGE
		this.bridge = { 'specs':{ 'translate': new THREE.Vector3(0,-15, 40), 'rx':(0.24497866312686414),'ry': Math.PI/2,'rz': 0, 'width': (41.5),'height': 10, 'mat': new THREE.MeshPhongMaterial( {
			transparent: true,
			opacity: 0.5 ,
			side: THREE.DoubleSide
		})}, 'options' : { 'solid':true, 'doubleside': true } }
		this.walls.push(this.bridge)

		//LEVEL ONE
		this.floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
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

		for(var w in unit.room2){
			unit.room2[w].specs.translate.add(new THREE.Vector3(0,-10,80))
			makeT(unit.room2[w])
		}

		for(var b in unit.btns2){
			unit.btns2[b].specs.translate.add(new THREE.Vector3(0,-10,80))
			makeB(unit.btns2[b])
		}

		for(var w in unit.room3){
			unit.room3[w].specs.translate.add(new THREE.Vector3(0,-5,140))
			makeT(unit.room3[w])
		}

		for(var b in unit.btns3){
			unit.btns3[b].specs.translate.add(new THREE.Vector3(0,-5,140))
			makeB(unit.btns3[b])
		}

		//FPP.GEOMETRY.makeTunnel(5, 5, 40.5, new THREE.Vector3(0,-10.5,41), new THREE.Vector3(-Math.PI/2 + 0.25 , Math.PI/4,0))


	}

		return unit

	})(window, document)
