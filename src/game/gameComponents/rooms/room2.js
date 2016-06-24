FPP.ROOM2 = (function(window, document, undefined) {

  var room2 = new function() {

    this.walls = []
    this.btns = []

    //LEVEL TWO
    this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fLwall)

    this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.fRwall)

    this.bLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bLwall)

    this.bCwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':false, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bCwall)

    this.bRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.bRwall)

    this.door = { 'specs':{ 'id': 2, 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.door)

    this.a2 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(this.a2)

    this.b2 = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.b2)

    this.c2 = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.c2)

    this.d2 = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(this.d2)

    this.btn2a = {'specs': { 'id': 2, 'translate' : new THREE.Vector3(-5,0.1-10,0), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
    this.btns.push(this.btn2a)

    this.btn2b = {'specs': { 'id': 2, 'translate' : new THREE.Vector3(5,0.1-10,0), 'path' : './assets/images/btn2.png' , 'isSbutton': true}}
    this.btns.push(this.btn2b)

    this.move = new THREE.Vector3(0,-10,80)
  }

  return room2

})(window, document)
