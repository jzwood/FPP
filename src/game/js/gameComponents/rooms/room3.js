FPP.ROOM3 = (function(window, document, undefined) {

  var room3 = new function() {

  	this.walls = []
  	this.btns = []
    //LEVEL THREE
    this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fLwall)

    this.fCwall = { 'specs':{ 'translate': new THREE.Vector3(0, 2, 29.99), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fCwall)

    this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.fRwall)

    this.bLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bLwall)

    this.bCwall = { 'specs':{ 'translate': new THREE.Vector3(0, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':false, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bCwall)

    this.bRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.bRwall)

    this.a3 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 60, 'image_path': '../assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(this.a3)

    this.b3 = { 'specs':{ 'translate': new THREE.Vector3(15, -2.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.b3)

    this.c3 = { 'specs':{ 'translate': new THREE.Vector3(-15, -2.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.c3)

    this.d3 = { 'specs':{ 'translate': new THREE.Vector3(0, 5, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
    this.walls.push(this.d3)

    this.cage1 = { 'specs':{'translate': new THREE.Vector3(0,-5.5,10), 'rx':Math.PI/2,'ry':0,'rz':0,'width':30,'height': 9, 'image_path': '../assets/images/bh.png','mat': new THREE.MeshPhongMaterial( {
      transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.cage1)

    this.doori = { 'specs':{ 'id': '3a', 'translate': new THREE.Vector3(0,-10+0.01,0), 'rx':0,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.doori)

    this.btn3i = {'specs': { 'id': '3a', 'translate' : new THREE.Vector3(10,-10+0.01,-10), 'path' : '../assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(this.btn3i)

    this.btn3ii= {'specs': { 'id': '3b', 'translate' : new THREE.Vector3(0,-10+0.01,-10), 'path' : '../assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(this.btn3ii)

    this.doorii = { 'specs':{ 'id': '3b', 'translate': new THREE.Vector3(0, -5.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.doorii)

    this.move = new THREE.Vector3(0,-5,150.2)
  }

  return room3

})(window, document)
