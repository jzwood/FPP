//	FPP (First Person Puzzle) game object
var FPP = FPP || {};

FPP.LCS = (function(window, document, undefined) {

	var lcs = new function() {
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
		this.scene = new THREE.Scene()
		this.renderer = new THREE.WebGLRenderer()
	}

	lcs.initLights = function() {
		// var amb_light = new THREE.AmbientLight(0x6B6B6B) // soft white light
		var amb_light = new THREE.AmbientLight(0xffffff, 0.7)
		lcs.scene.add(amb_light)

		//not doing this yet
		if (false) {
			var spotlights = []
			var spotlight = new THREE.SpotLight(0xffffff, 0.5, 100, Math.PI / 2 )
			spotlight.position.set(0, 1, 0)
			spotlights.push(spotlight)

			var spotlight2 = spotlight.clone()
			spotlight2.position.set(0, 1, 40)
			spotlight2.target.position.set(0, 0, 40)
			lcs.scene.add( spotlight2.target )
			spotlights.push(spotlight2)

			for(var s in spotlights){
				var spot_light = spotlights[s]

				spot_light.castShadow = true

				spot_light.shadow.mapSize.width = 1024
				spot_light.shadow.mapSize.height = 1024

				spot_light.shadow.camera.near = 20
				spot_light.shadow.camera.far = 50
				spot_light.shadow.camera.fov = 40

				spot_light.shadowMapBias = 0.1
				spot_light.shadowMapDarkness = 0.7
				spot_light.shadow.mapSize.width = 2 * 512
				spot_light.shadow.mapSize.height = 2 * 512


				var spotLightHelper = new THREE.SpotLightHelper( spot_light )
				lcs.scene.add( spotLightHelper )
				lcs.scene.add(spot_light)
			}
		}
	}

	lcs.initRenderer = function() {
		//lcs.scene.fog = new THREE.Fog(0x000000, 0, 500)
		lcs.renderer.shadowMap.enabled = true
		lcs.renderer.shadowMapSoft = true
		lcs.renderer.setSize(window.innerWidth, window.innerHeight)
		//lcs.renderer.setClearColor(lcs.scene.fog.color, 1)
	}

	lcs.init = function() {

		lcs.initLights()
		lcs.initRenderer()
		document.body.appendChild(lcs.renderer.domElement)

		window.addEventListener('resize', lcs.onWindowResize, false)
	}

	lcs.onWindowResize = function() {
		lcs.camera.aspect = window.innerWidth / window.innerHeight
		lcs.camera.updateProjectionMatrix()
		lcs.renderer.setSize(window.innerWidth, window.innerHeight)
	}

	return lcs

})(window, document)
