FPP.ROOM1 = (function(window, document, undefined) {

  var room1 = new function() {

    this.walls = []
    this.btns = []
    //LEVEL ONE
    this.floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': '../assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(this.floor)

    this.bwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':Math.PI,'rz':0,'width':30,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':3, 'wrap_h':1 } }
    this.walls.push(this.bwall)

    this.fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.fLwall)

    this.fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(this.fRwall)

    this.wleft = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.wleft)

    this.wright = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(this.wright)

    this.ceil = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
    this.walls.push(this.ceil)

    this.door = { 'specs':{ 'id': 1, 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(this.door)

    this.btn = {'specs': { 'id': 1, 'translate' : new THREE.Vector3(0,0.1-10,0), 'path' : '../assets/images/btn1.png' }}
    this.btns.push(this.btn)

    this.move = new THREE.Vector3(0,0,0)

  }

  return room1

})(window, document)
