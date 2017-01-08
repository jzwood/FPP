FPP.ROOM6 = (function(window, document, undefined) {

  var room6 = new function() {

    this.walls = []
    this.btns = []
    //LEVEL ONE

    var floor = { 'specs':{ 'translate': new THREE.Vector3(0, -10, 0), 'rx':0,'ry':0,'rz':0,'width':30,'height': 40, 'image_path': '../assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'd' } }
    this.walls.push(floor)

    var bLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(bLwall)

    var bCwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.1, side: THREE.DoubleSide })
    }, 'options' : { 'solid':false, 'stretch':true , 'side': 'd'} }
    this.walls.push(bCwall)

    var left_div_wall = { 'specs':{ 'translate': new THREE.Vector3(9, -5.5, -15), 'rx':0,'ry':Math.PI/2,'rz':Math.PI/2,'width':10,'height': 9,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(left_div_wall)

    var left_div_wall2 = { 'specs':{ 'translate': new THREE.Vector3(7, -5.5, -5), 'rx':0,'ry':Math.PI/2,'rz':Math.PI/2,'width':10,'height': 9,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(left_div_wall2)

    var right_div_wall = { 'specs':{ 'translate': new THREE.Vector3(-9, -5.5, -15), 'rx':0,'ry':Math.PI/2,'rz':Math.PI/2,'width':10,'height': 9,
    'mat': new THREE.MeshPhongMaterial( { transparent: true, opacity: 0.5, side: THREE.DoubleSide })
    }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(right_div_wall)

    var bRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, -20), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(bRwall)

    var fLwall = { 'specs':{ 'translate': new THREE.Vector3(-10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(fLwall)

    var fRwall = { 'specs':{ 'translate': new THREE.Vector3(10, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true, 'side': 'd' } }
    this.walls.push(fRwall)

    var wleft = { 'specs':{ 'translate': new THREE.Vector3(15, -5.5, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':9,'height':40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(wleft)

    var wright = { 'specs':{ 'translate': new THREE.Vector3(-15, -5.5, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':9,'height':40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':2, 'wrap_h':10 } }
    this.walls.push(wright)

    var ceil = { 'specs':{ 'translate': new THREE.Vector3(0, -1, 0), 'rx':0,'ry':0,'rz':Math.PI,'width':30,'height': 40, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':false, 'stretch':false, 'wrap_w':15, 'wrap_h':20 } }
    this.walls.push(ceil)

    var door = { 'specs':{ 'id': '7b', 'translate': new THREE.Vector3(0, -5.5, 20), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door)

    var door = { 'specs':{ 'id': '7a', 'translate': new THREE.Vector3(-10, -5.5, 0), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door)

    var mwall = { 'specs':{ 'translate': new THREE.Vector3(0, -5.5, 0), 'rx':Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/floor4.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(mwall)

    var door = { 'specs':{ 'id': '7c', 'translate': new THREE.Vector3(10, -5.5, 0), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':10,'height': 9, 'image_path': '../assets/images/door.jpg' }, 'options' : { 'solid':true, 'stretch':true , 'side': 'd'} }
    this.walls.push(door)

    var btn = {'specs': { 'id': '7a', 'translate' : new THREE.Vector3(-12,0.1-10,-17), 'path' : '../assets/images/btn1.png', 'isSbutton': false }}
    this.btns.push(btn)

    var btn = {'specs': { 'id': '7b', 'translate' : new THREE.Vector3(12,0.1-10,-17), 'path' : '../assets/images/btn1.png', 'isSbutton': false }}
    this.btns.push(btn)

    var btn = {'specs': { 'id': '7c', 'translate' : new THREE.Vector3(10,0.1-10,5), 'path' : '../assets/images/btn2.png', 'isSbutton': true }}
    this.btns.push(btn)

    var btn = {'specs': { 'id': '7c', 'translate' : new THREE.Vector3(-10,0.1-10,5), 'path' : '../assets/images/btn2.png', 'isSbutton': true }}
    this.btns.push(btn)

    // this.move = new THREE.Vector3(0,0,480)
    this.move = new THREE.Vector3(0,-5,150.2 + 180 + 60)

  }

  return room6

})(window, document)
