FPP.LCS = (function(window, document, undefined) {

	var lcs = new function(){
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
		this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x000000, 0, 500);
	}

	lcs.initLights = function(){
		var amb_light = new THREE.AmbientLight(0x6B6B6B) // soft white light
		lcs.scene.add(amb_light)

    var spot_light = new THREE.SpotLight(0xffffff)
		spot_light.position.set(10, 30, 20)
    spot_light.target.position.set(0, 0, 0)

		if (true) {
				spot_light.castShadow = true;

				spot_light.shadowCameraNear = 20;
				spot_light.shadowCameraFar = 50; //camera.far;
				spot_light.shadowCameraFov = 40;

				spot_light.shadowMapBias = 0.1;
				spot_light.shadowMapDarkness = 0.7;
				spot_light.shadowMapWidth = 2 * 512;
				spot_light.shadowMapHeight = 2 * 512;

				spot_light.shadowCameraVisible = true;
		}
		lcs.scene.add(spot_light)
	}

	lcs.init() {

			lcs.initLights()

		}

function init() {


    renderer = new THREE.WebGLRenderer();
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 1);

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

	return lcs

})(window, document)
