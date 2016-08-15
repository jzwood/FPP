FPP.ROOM5 = (function(window, document, undefined) {

  var room5 = new function() {

  	this.walls = []
  	this.btns = []
    //LEVEL THREE
    var fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(fLwall)
    fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, 10), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(fLwall)
    fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, -10), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(fLwall)

    var fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, 30), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(fRwall)
    fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, 10), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(fRwall)
    fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, -10), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(fRwall)

    var fCwall = { 'specs':{ 'translate': new THREE.Vector3(0, 2, 29.99), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 6, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(fCwall)

    var bLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(bLwall)

    var bRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -2.5, -30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 15, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(bRwall)

    var floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 60, 'image_path': '../assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(floor)

    var rightW = { 'specs':{ 'translate': new THREE.Vector3(15, -2.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(rightW)

    var leftW = { 'specs':{ 'translate': new THREE.Vector3(-15, -2.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(leftW)

    var ceiling = { 'specs':{ 'translate': new THREE.Vector3(0, 5, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 60, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
    this.walls.push(ceiling)

    var ramp1 = { 'specs':{ 'translate': new THREE.Vector3(10,-5.5,-0.5), 'rx':Math.PI/4,'ry':0,'rz':0,'width':10,'height': Math.sqrt(2)*9, 'image_path': '../assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'f'} }
    this.walls.push(ramp1)
    var platform1 = { 'specs':{ 'translate': new THREE.Vector3(5,-1,-7.5), 'rx':0,'ry':0,'rz':0,'width':20,'height': 5, 'image_path': '../assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':false , 'wrap_w':6, 'wrap_h':1, 'side': 'f'} }
    this.walls.push(platform1)

    var ramp2 = { 'specs':{ 'translate': new THREE.Vector3(-10,-5.5,-0.5+20), 'rx':Math.PI/4,'ry':0,'rz':0,'width':10,'height': Math.sqrt(2)*9, 'image_path': '../assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'f'} }
    this.walls.push(ramp2)
    var platform2 = { 'specs':{ 'translate': new THREE.Vector3(-5,-1,-7.5+20), 'rx':0,'ry':0,'rz':0,'width':20,'height': 5, 'image_path': '../assets/images/floor3.jpg' }, 'options' : { 'solid':true, 'stretch':false , 'wrap_w':6, 'wrap_h':1, 'side': 'f'} }
    this.walls.push(platform2)

    var door1 = { 'specs':{ 'id': '5a', 'translate': new THREE.Vector3(0,-5.5,-10), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door1)

    var door2 = { 'specs':{ 'id': '5b', 'translate': new THREE.Vector3(0,-5.5,10), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door2)

    var door3 = { 'specs':{ 'id': '5c', 'translate': new THREE.Vector3(0, -5.5, 30), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door3)

    var btn1 = {'specs': { 'id': '5a', 'translate' : new THREE.Vector3(0,-10+0.01,-18), 'path' : '../assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(btn1)

    var btn2 = {'specs': { 'id': '5b', 'translate' : new THREE.Vector3(10,-10+0.01,-18), 'path' : '../assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(btn2)

    var btn3 = {'specs': { 'id': '5c', 'translate' : new THREE.Vector3(-10,-10+0.01,-18), 'path' : '../assets/images/btn1.png' , 'isSbutton': false}}
    this.btns.push(btn3)



    this.move = new THREE.Vector3(0,-5,150.2 + 180)

  }

  return room5

})(window, document)
