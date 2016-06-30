FPP.ROOM7 = (function(window, document, undefined) {

  var room7 = new function() {

  	this.walls = []
  	this.btns = []
    //LEVEL THREE
    this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fLwall)

    this.fCwall = { 'specs':{ 'translate': new THREE.Vector3(0, 2, 29.99), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fCwall)

    this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.fRwall)

    this.bLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bLwall)

    this.bCwall = { 'specs':{ 'translate': new THREE.Vector3(0, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':false, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.bCwall)

    this.bRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.bRwall)

    this.a3 = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 60, 'image_path': './assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(this.a3)

    this.b3 = { 'specs':{ 'translate': new THREE.Vector3(15, -2.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.b3)

    this.c3 = { 'specs':{ 'translate': new THREE.Vector3(-15, -2.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':60, 'image_path': './assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.c3)

    this.d3 = { 'specs':{ 'translate': new THREE.Vector3(0, 5, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 60, 'image_path': './assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
    this.walls.push(this.d3)

    this.cage1 = { 'specs':{'translate': new THREE.Vector3(0,-5.5,10), 'rx':Math.PI/2,'ry':0,'rz':0,'width':6,'height': 9, 'image_path': './assets/images/bh.png','mat': new THREE.MeshPhongMaterial( {
      transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.cage1)

    this.cage2 = { 'specs':{'translate': new THREE.Vector3(0,-5.5,16), 'rx':Math.PI/2,'ry':0,'rz':0,'width':6,'height': 9, 'image_path': './assets/images/bh.png' ,'mat': new THREE.MeshPhongMaterial( {
      transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.cage2)

    this.cage3 = { 'specs':{'translate': new THREE.Vector3(3,-5.5,13), 'rx':Math.PI/2,'ry':0,'rz':Math.PI/2,'width':6,'height': 9, 'image_path': './assets/images/bh.png' ,'mat': new THREE.MeshPhongMaterial( {
      transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.cage3)

    this.cage4 = { 'specs':{'translate': new THREE.Vector3(-3,-5.5,13), 'rx':Math.PI/2,'ry':0,'rz':Math.PI/2,'width':6,'height': 9, 'image_path': './assets/images/bh.png', 'mat': new THREE.MeshPhongMaterial( {
      transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.cage4)

    this.doori = { 'specs':{ 'id': '6a', 'translate': new THREE.Vector3(0,-10+0.01,0), 'rx':0,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.doori)

    this.btni = {'specs': { 'id': '6a', 'translate' : new THREE.Vector3(0,-10+0.01,-10), 'path' : './assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(this.btni)

    this.btnii= {'specs': { 'id': '6b', 'translate' : new THREE.Vector3(0,-10+0.01,13), 'path' : './assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(this.btnii)

    this.doorii = { 'specs':{ 'id': '6b', 'translate': new THREE.Vector3(0, -5.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': './assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.doorii)

    this.move = new THREE.Vector3(0,-10,480)
    // this.move = new THREE.Vector3(0,-5,150.2 + 180 + 70)
  }

  return room7

})(window, document)
