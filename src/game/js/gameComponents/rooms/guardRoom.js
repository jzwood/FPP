FPP.ROOM8 = (function(window, document, undefined) {

  var room8 = new function() {

  	this.walls = []
  	this.btns = []
    //LEVEL THREE

    this.fCwall = { 'specs':{ 'translate': new THREE.Vector3(0, 0, 7.5), 'rx':-Math.PI/2,'ry':0,'rz':0,'width':15,'height': 15, 'image_path': '../../assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'f'} }
    this.walls.push(this.fCwall)

    this.a3 = { 'specs':{ 'translate': new THREE.Vector3(0, -7.5, 0), 'rx':0,'ry':0,'rz':0,'width':15,'height': 15, 'image_path': '../../assets/images/floor1.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'f' } }
    this.walls.push(this.a3)
    //
    this.b3 = { 'specs':{ 'translate': new THREE.Vector3(7.5, 0, 0), 'rx':0,'ry':0,'rz':Math.PI/2,'width':15,'height':15, 'image_path': '../../assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'f' } }
    this.walls.push(this.b3)

    this.c3 = { 'specs':{ 'translate': new THREE.Vector3(-7.5, 0, 0), 'rx':0,'ry':0,'rz':-Math.PI/2,'width':15,'height':15, 'image_path': '../../assets/images/floor4HD.jpg' }, 'options' : { 'solid':true, 'stretch':false, 'wrap_w':15, 'wrap_h':20, 'side': 'f' } }
    this.walls.push(this.c3)

    this.move = new THREE.Vector3(0,-12.5,517.5)
    // this.move = new THREE.Vector3(0,-5,150.2 + 180 + 70)
  }

  return room8

})(window, document)
