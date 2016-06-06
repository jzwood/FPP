FPP.PLAYER = (function(window, document, undefined) {

	var player = new function(){

		var mass = 5, radius = 2,
		sphereShape = new CANNON.Sphere(radius),

		group = FPP.GEOMETRY.group

		this.firstPerson = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.firstPerson.addShape(sphereShape)
		this.firstPerson.position.set(0, -7, 0)
		this.firstPerson.linearDamping = 0.9
		this.firstPerson.collisionFilterGroup = group(2) //things are by default group(1)
		this.firstPerson.posLog = []
		this.firstPerson.rewinding = false

		this.p2 = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.p2.addShape(sphereShape)
		this.p2.position.y = -10 //far from the button to start (0,0,0) is too close at beginning
		this.p2.collisionFilterGroup = group(3)
		this.p2.timeLog = []
		this.timer = 0

		this.time = 0
		this.dt = 1/60.
		this.clock = document.getElementById('clock')

		//this is placeholder sphere for p2
		var geometry = new THREE.SphereGeometry( radius, 7, 7 ),
		material = new THREE.MeshBasicMaterial( {color: 0x00ffff} )
		this.placeholder = new THREE.Mesh( geometry, material )
		this.placeholder.visible = false
		var edges = new THREE.EdgesHelper(this.placeholder, 0x919191)
		FPP.LCS.scene.add(edges)
	}

	player.formatTime = function(){
		var sec = player.time * player.dt,
		now = ~~sec % 60 + ':' + ~~((10 * sec) % 10)
		if (player.timer){
			var max = player.timer * player.dt
			player.clock.innerHTML = now + " <span style='color:red'>" + ~~max %  60 + ':' + ~~((10 * max) % 10) + "</span>"
		}else{
			player.clock.innerHTML = now
		}
	}

	//executed click
	player.p2.startRecord = function(){
		//console.log('start record')
		player.time = 0
		player.p2.recording = true
		player.p2.playback = false
		player.p2.startPos = player.firstPerson.position.clone()
	}

	//executed click
	player.p2.startPlayback = function(){
		//console.log('start playback')
		player.timer = player.time
		player.p2.recording = false
		player.p2.playback = true
		player.p2.timeLog.reverse()
		var p = player.p2.startPos.clone()
		player.p2.position.set(p.x, p.y, p.z)
		player.firstPerson.position.set(p.x, p.y, p.z)//change this eventually to be facing behind p2 on playback start
		player.firstPerson.rewinding = true
	}

	document.addEventListener('click', function(e){
		if(player.controls.enabled && !player.firstPerson.rewinding){
			if(player.p2.recording) player.p2.startPlayback()
			else player.p2.startRecord()
		}
	})

	//used by PointerLockControls.js
	player.p2.record = function(vx,vy, vz) {
		if(player.p2.recording && player.controls.enabled){
			console.log('recording')
			player.time++
			player.formatTime()
			player.p2.timeLog.push(vx, vy, vz)
			if(player.time % 10 === 0) player.firstPerson.posLog.push(player.firstPerson.position.clone())
		}
	}

	player.rewind = function(){
		if(player.firstPerson.posLog.length){
			player.firstPerson.position.copy(player.firstPerson.posLog.pop())
			player.time -= 10
			player.formatTime()
		}else{
			player.firstPerson.rewinding = false
			player.time = 0
		}
	}

	//AKA the Playback.	used by animate.js
	player.p2.update = function(){
		if(player.firstPerson.rewinding){
			player.rewind()
		}else if(player.p2.playback){
			//console.log('updating')
			player.time++
			player.formatTime()
			player.placeholder.visible = true
			if(player.p2.timeLog.length){
				player.p2.velocity.x = player.p2.timeLog.pop()
				player.p2.velocity.y = player.p2.timeLog.pop()
				player.p2.velocity.z = player.p2.timeLog.pop()
				player.placeholder.position.copy(player.p2.position)
				player.placeholder.quaternion.copy(player.p2.quaternion)
			}else{
				console.log('done updating')
				player.placeholder.visible = false
				player.p2.position.y = -10
				player.p2.playback = false
				player.p2.recording = false
				player.time = 0
				player.timer = 0
				//player.formatTime()
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
		FPP.GEOMETRY.world.addBody(player.p2)

		player.controls = new PointerLockControls(FPP.LCS.camera, player.firstPerson, player.p2)
		FPP.LCS.scene.add(player.controls.getObject())
		FPP.LCS.scene.add( player.placeholder )
	}

	return player

})(window, document)
