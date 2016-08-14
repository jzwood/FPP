FPP.PLAYER = (function(window, document, undefined) {

	var querystring = location.search.slice(1),
	level = (querystring.search(/level=[1-9]/) > -1) ? querystring.match(/[1-9]/)[0] : 1

	var setLevel = {
			1 : function(){return new THREE.Vector3(0,-5,-10)},
			2 : function(){return new THREE.Vector3(0,-10,70)},
			3 : function(){return new THREE.Vector3(0,-10,140)},
			4 : function(){return new THREE.Vector3(0,-10,210)},
			5 : function(){return new THREE.Vector3(0,-10,280)},
			6 : function(){return new THREE.Vector3(0,-10,308)},
			7 : function(){return new THREE.Vector3(0,-10,382)},
			8 : function(){return new THREE.Vector3(0,0,465)},
			9 : function(){return new THREE.Vector3(0,0,520)}
		}

	var player = new function(){

		var mass = 5, radius = 2,
		sphereShape = new CANNON.Sphere(radius),
		group = FPP.GEOMETRY.group

		this.firstPerson = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.firstPerson.addShape(sphereShape)

		this.firstPerson.position.copy(setLevel[level]())
		this.firstPerson.linearDamping = 0.9
		this.firstPerson.collisionFilterGroup = group(2) //things are by default group(1)
		this.firstPerson.posLog = []
		this.firstPerson.rewinding = false

		this.p2 = new CANNON.Body({ mass: mass, material: FPP.GEOMETRY.groundMaterial })
		this.p2.startPos = new CANNON.Vec3(0,0,0)
		this.p2.addShape(sphereShape)
		this.p2.position.y = -10 //far from the button to start (0,0,0) is too close at beginning
		this.p2.collisionFilterGroup = group(3)
		this.p2.timeLog = []
		this.p2.playback = false
		this.p2.recording = false

		this.rewindSpeed = 2
		this.timer = 0
		this.time = 0
		this.dt = 1/60.
		this.clock = document.getElementById('clock')

		//init
		this.frame = 0
		this.frameDelayCounter = 0
		this.gifDir = false

		//chosen rate
		this.frameDelay = 4

		//this is placeholder sphere for p2
		var geometry = new THREE.IcosahedronGeometry(radius)
		// var geometry = new THREE.TorusGeometry( radius, 0.2, 16, 100 );
		//var geometry = new THREE.SphereGeometry( radius, 7, 7 ),
		material = new THREE.MeshPhongMaterial( {color: 0xffffff, transparent: true, opacity: 0.4, side: THREE.FrontSide} )

	}

	player.formatTime = function(isGreen){
		var sec = player.time * player.dt,
		now = ~~sec % 60 + ':' + ~~((10 * sec) % 10),
		col = isGreen ? 'green' : 'red'
		if (player.timer){
			var max = player.timer * player.dt
			player.clock.innerHTML = now + " <span style=\'color:" + col + "\'>" + ~~max %  60 + ':' + ~~((10 * max) % 10) + "</span>"
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
		player.p2.startPos.copy(player.firstPerson.position)
		document.getElementById('rewind').style.display = "block"

	}

	//executed click
	player.p2.startPlayback = function(){
		player.frameDelayCounter = 0
		//console.log('start playback')
		player.timer = player.time
		player.p2.recording = false
		player.p2.playback = true
		player.p2.timeLog.reverse()
		player.firstPerson.rewinding = true
		document.getElementById('clock').classList.toggle('clock-rewind')

		// document.getElementById('blocker').style.display = "block"
		// document.getElementById('instructions').style.display = "none"
		document.getElementById('rewind').style.display = "none"
	}

	document.addEventListener('click', function(e){
		if(player.controls.enabled && !player.firstPerson.rewinding){
			if(player.p2.recording) player.p2.startPlayback()
			else if(!player.p2.playback) player.p2.startRecord()
		}
	})

	//used by PointerLockControls.js
	player.p2.record = function(vx, vy, vz) {
		if(!player.placeholder){
			player.placeholder = FPP.GEOMETRY.gifs[0]
		}
		if(player.p2.recording && player.controls.enabled){
			// console.log('recording')
			player.time++
			player.formatTime()
			player.p2.timeLog.push(vx, vy, vz)
			if(player.time % player.rewindSpeed === 0){ // sped up reversal
				player.firstPerson.posLog.push(player.firstPerson.position.clone())
			}
		}
	}

	player.rewind = function(){
		if(player.firstPerson.posLog.length){
			player.firstPerson.position.copy(player.firstPerson.posLog.pop())
			player.time -= player.rewindSpeed
			player.formatTime()
		}else{
			player.firstPerson.rewinding = false
			player.time = 0
			player.firstPerson.position.copy(player.p2.startPos)
			player.p2.position.copy(player.p2.startPos)
			player.placeholder.position.copy(player.p2.startPos)
			document.getElementById('clock').classList.toggle('clock-rewind')
			//document.getElementById('blocker').style.display = "none"
		}
	}

	//AKA the Playback.	used by animate.js
	player.p2.update = function(){
		if(player.firstPerson.position.y < -100){
			//fallen to death
			player.firstPerson.position.copy(setLevel[1]())
		}else	if(player.firstPerson.rewinding){
			player.rewind()
		}else if(player.p2.playback){
			//console.log('updating')
			player.time++

			//this chunk defines the pseudo-gif animation of your doppleganger
			var numOfFrame = 7
			if(player.frameDelayCounter++ % player.frameDelay === 0)
				player.frame = (player.frame + 1) % (numOfFrame)
			var gifs = FPP.GEOMETRY.gifs
			for(var i=0; i<numOfFrame; i++){
				gifs[i].visible = false
			}
			var doppleganger = gifs[player.frame]
			doppleganger.visible = true

			doppleganger.visible = true
			player.placeholder = doppleganger
			doppleganger.lookAt(player.firstPerson.position)

			// if(Math.random() < 0.01){
			// var d = new Date().getMilliseconds()
			if(Math.random() < 0.01){
				player.gifDir = !player.gifDir
			}
			if(player.gifDir){
				player.placeholder.rotateY(Math.PI)
			}

			// doppleganger.edges.visible = true
			if(player.p2.timeLog.length){
				player.formatTime()
				player.p2.velocity.x = player.p2.timeLog.pop()
				var jump = player.p2.timeLog.pop()
				if(jump > 1) player.p2.velocity.y = jump
				player.p2.velocity.z = player.p2.timeLog.pop()
				//player.p2.quaternion = new CANNON.Quaternion(0,0,0,1)
				player.placeholder.position.copy(player.p2.position)
				// player.placeholder.quaternion.copy(player.p2.quaternion)

			}else{
				// console.log('done updating')
				doppleganger.visible = false
				// doppleganger.edges.visible = false
				player.p2.position.y -= 100 //puts physical sphere far below scene so it can't interfere
				player.p2.playback = false
				player.p2.recording = false
				player.formatTime(true)
				player.time = 0
				player.timer = 0
			}
		}
	}

	document.addEventListener('keydown', function(e){
		//console.log(e.keyCode)
		if(e.keyCode >= 49 && e.keyCode <= 56){
			FPP.PLAYER.firstPerson.position.copy(setLevel[e.keyCode - 48]())
		}
	})

	player.init = function(){

		FPP.GEOMETRY.world.addBody(player.firstPerson)
		FPP.GEOMETRY.world.addBody(player.p2)

		player.controls = new PointerLockControls(FPP.LCS.camera, player.firstPerson, player.p2)
		FPP.LCS.scene.add(player.controls.getObject())

		}

	return player

})(window, document)
