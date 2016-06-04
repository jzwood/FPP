FPP.PLAYER = (function(window, document, undefined) {

	var player = new function(){

		var mass = 5,
		radius = 2,
		sphereShape = new CANNON.Sphere(radius)

		this.firstPerson = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.firstPerson.addShape(sphereShape)
		this.firstPerson.position.set(0, -7, 0)
		this.firstPerson.linearDamping = 0.9

		this.p2 = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.p2.addShape(sphereShape)
		this.p2.timeLog = []

		//this is placeholder sphere for p2
		var geometry = new THREE.SphereGeometry( radius, 7, 7 ),
		material = new THREE.MeshBasicMaterial( {color: 0x00ffff} )
		this.placeholder = new THREE.Mesh( geometry, material )
		var edges = new THREE.EdgesHelper(this.placeholder, 0x919191)
		FPP.LCS.scene.add(edges)
	}

	//executing by keypress
	player.p2.startRecord = function(){
		player.p2.recording = true
		player.p2.playback = false
	}

	//used by PointerLockControls.js
	player.p2.record = function(vx,vy) {
		if(player.p2.recording && player.controls.enabled){
			player.p2.timeLog.push(vx, vy)
		}
	}

	//executing by keypress
	player.p2.startPlayback = function(){
		player.p2.recording = false
		player.p2.playback = true
		player.p2.position = player.firstPerson.position.clone()
	}

	//used by animate.js
	player.p2.update = function(){
		if(player.p2.playback){
			if(player.p2.timeLog.length < 2){
				player.p2.velocity.x = player.p2.timeLog.pop()
				player.p2.velocity.y = player.p2.timeLog.pop()
				player.placeholder.position.copy(player.p2.position)
			}else{
				player.p2.playback = false
				player.p2.recording = false
			}
		}
	}

	document.addEventListener('keydown', function(e){
		// console.log(e.keyCode)
		if(e.keyCode === 69){
			FPP.PLAYER.firstPerson.position.y += 5
		}
	})

	player.init = function(){

		FPP.GEOMETRY.world.addBody(player.firstPerson)

		player.controls = new PointerLockControls(FPP.LCS.camera, player.firstPerson)
		FPP.LCS.scene.add(player.controls.getObject())
		FPP.LCS.scene.add( player.placeholder )
	}

	return player

})(window, document)
