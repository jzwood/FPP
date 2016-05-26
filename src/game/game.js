var sphereShape, sphereBody, world, physicsMaterial, walls = [],
    balls = [],
    ballMeshes = [],
    boxes = [],
    boxMeshes = [];

var camera, scene, renderer;
var geometry, material, mesh;
var controls, time = Date.now();

var blocker = document.getElementById('blocker');
var instructions = document.getElementById('instructions');

var havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document;

if (havePointerLock) {

    var element = document.body;

    var pointerlockchange = function(event) {

        if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {

            controls.enabled = true;

            blocker.style.display = 'none';

        } else {

            controls.enabled = false;

            blocker.style.display = '-webkit-box';
            blocker.style.display = '-moz-box';
            blocker.style.display = 'box';

            instructions.style.display = '';

        }

    }

    var pointerlockerror = function(event) {
        instructions.style.display = '';
    }

    // Hook pointer lock state change events
    document.addEventListener('pointerlockchange', pointerlockchange, false);
    document.addEventListener('mozpointerlockchange', pointerlockchange, false);
    document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

    document.addEventListener('pointerlockerror', pointerlockerror, false);
    document.addEventListener('mozpointerlockerror', pointerlockerror, false);
    document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

    instructions.addEventListener('click', function(event) {
				sphereBody.position.set(0, 5, 0);
        instructions.style.display = 'none';

        // Ask the browser to lock the pointer
        element.requestPointerLock = element.requestPointerLock || element.mozRequestPointerLock || element.webkitRequestPointerLock;

        if (/Firefox/i.test(navigator.userAgent)) {

            var fullscreenchange = function(event) {

                if (document.fullscreenElement === element || document.mozFullscreenElement === element || document.mozFullScreenElement === element) {

                    document.removeEventListener('fullscreenchange', fullscreenchange);
                    document.removeEventListener('mozfullscreenchange', fullscreenchange);

                    element.requestPointerLock();
                }

            }

            document.addEventListener('fullscreenchange', fullscreenchange, false);
            document.addEventListener('mozfullscreenchange', fullscreenchange, false);

            element.requestFullscreen = element.requestFullscreen || element.mozRequestFullscreen || element.mozRequestFullScreen || element.webkitRequestFullscreen;

            element.requestFullscreen();

        } else {

            element.requestPointerLock();

        }

    }, false);

} else {

    instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

}

initCannon();
init();
animate();

function initCannon() {
    // Setup our world
    world = new CANNON.World();
    world.quatNormalizeSkip = 0;
    world.quatNormalizeFast = false;

    var solver = new CANNON.GSSolver();

    // world.defaultContactMaterial.contactEquationStiffness = 1e9;
    // world.defaultContactMaterial.contactEquationRelaxation = 4;

    solver.iterations = 5; //7
    solver.tolerance = 0.1;
    var split = true;
    if (split)
        world.solver = new CANNON.SplitSolver(solver);
    else
        world.solver = solver;

    world.gravity.set(0, -20, 0);
    world.broadphase = new CANNON.NaiveBroadphase();

    // Create a slippery material (friction coefficient = 0.0)
    var groundMaterial = new CANNON.Material("groundMaterial");

    // Adjust constraint equation parameters for ground/ground contact
    var ground_ground_cm = new CANNON.ContactMaterial(groundMaterial, groundMaterial, {
        friction: 0.4,
        restitution: 0.3,
        contactEquationStiffness: 1e8,
        contactEquationRelaxation: 3,
        frictionEquationStiffness: 1e8,
        frictionEquationRegularizationTime: 3,
    });

    // Add contact material to the world
    world.addContactMaterial(ground_ground_cm);

    // Create a sphere
    var mass = 5,
        radius = 1.3;
		    sphereShape = new CANNON.Sphere(radius);
		    sphereBody = new CANNON.Body({
        mass: mass,
        material: groundMaterial
    });
    sphereBody.addShape(sphereShape);
    sphereBody.position.set(0, 5, 0);
    sphereBody.linearDamping = 0.9;
    world.addBody(sphereBody);

    // Create a plane
		var pos = {'x': 0, 'y': -20, 'z': 0}
		var rot = {'rx':0, 'ry': Math.PI/8, 'rz': 0}
		var vecDir = {'i':0, 'j': 1, 'k': 0}
		physicsWall(pos, vecDir, 50, 'test.jpg', true)
}

//square starts set facing towards z-hat
function physicsWall(p, vTo, scale, img_path, isTwoSided) {
	isTwoSided = isTwoSided || false
	//normalizes the incoming direction vector
	v = {};
	Object.keys(vTo).map(function(value, index) {
	   v[value] = vTo[value] / Math.sqrt(vTo.i * vTo.i + vTo.j * vTo.j + vTo.k * vTo.k)
	})

	/* WALL A. -- MAKING INVISIBLE WALL THAT RESPONDS TO PHYSICS */
    var wall = new CANNON.Body({
        mass: 0 //makes it a solid immovable structure
    }),
    // wall vertices
		os = 0.5,//offset
    vertices = [
        0, 0, os, // vertex 0
        1, 0, os, // vertex 1
        0, 1, os, // vertex 2
				1, 1, os //	vertex 3
    ].map(function(num) {
		  return scale * (num - os)
		});

    var trimesh_1 = new CANNON.Trimesh(vertices, [0,1,2]),
		trimesh_2 = new CANNON.Trimesh(vertices, [1,3,2])
		wall.addShape(trimesh_1)
		wall.addShape(trimesh_2)

		wall.position.set(p.x, p.y, p.z)
		// wall.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0), Math.PI/2)
		//wall.quaternion.setFromEuler(r.rx + Math.PI/2,r.ry,r.rz, 'XYZ')
		wall.quaternion.setFromVectors(new CANNON.Vec3(0,0,1), new CANNON.Vec3(v.i, v.j, v.k))

		world.addBody(wall)//added the invisible physics obeying wall
		/* WALL A. END */
		/* WALL B. -- MAKING TEXTURED WALL THAT MATCHES WALL A. */
		var loader = new THREE.TextureLoader();
		loader.load(img_path, function ( img ) {
			// floor
			geometry = new THREE.PlaneGeometry(scale, scale, 1, 1);
			//geometry.applyMatrix(new THREE.Matrix4().makeRotationFromEuler(new THREE.Euler(r.rx - Math.PI / 2, - r.ry, r.rz), 'XYZ'))
			geometry.applyMatrix(new THREE.Matrix4().makeRotationFromQuaternion(new THREE.Quaternion().setFromUnitVectors( new THREE.Vector3(0,0,1), new THREE.Vector3(v.i, v.j, v.k) )))
			// geometry.applyMatrix(new THREE.Matrix4().makeRotationX(r.rx - Math.PI / 2))
			// geometry.applyMatrix(new THREE.Matrix4().makeRotationZ(r.rz))

			material = new THREE.MeshPhongMaterial({
					map: img, side: isTwoSided ? THREE.DoubleSide : THREE.SingleSide
			});

			mesh = new THREE.Mesh(geometry, material);
			mesh.castShadow = true
			mesh.receiveShadow = true

			mesh.position.set(p.x, p.y, p.z)
			scene.add(mesh)//added the visible wall

			var m2 = mesh.clone()
			m2.position.set(0, 50, 0)
			scene.add(m2)

			},
			function ( xhr ) { // Function called when download progresses
				console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
			},
			function ( xhr ) { // Function called when download errors
				console.log( xhr, 'Texture Load Error Occurred' );
			});
}

function init() {

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 0, 500);

    var light = new THREE.AmbientLight(0x6B6B6B	); // soft white light
    scene.add(light);

		light = new THREE.SpotLight( 0xffffff );
		light.position.set( 10, 30, 20 );
		light.target.position.set( 0, 0, 0 );
		if(true){
				light.castShadow = true;

				light.shadowCameraNear = 20;
				light.shadowCameraFar = 50;//camera.far;
				light.shadowCameraFov = 40;

				light.shadowMapBias = 0.1;
				light.shadowMapDarkness = 0.7;
				light.shadowMapWidth = 2*512;
				light.shadowMapHeight = 2*512;

				light.shadowCameraVisible = true;
		}
		scene.add( light );

    controls = new PointerLockControls(camera, sphereBody);
    scene.add(controls.getObject());


    renderer = new THREE.WebGLRenderer();
    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(scene.fog.color, 1);

    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

var dt = 1 / 60;

function animate() {
    requestAnimationFrame(animate);
    if (controls.enabled) {
        world.step(dt);

        // Update box positions
        // for (var i = 0; i < boxes.length; i++) {
        //     boxMeshes[i].position.copy(boxes[i].position);
        //     boxMeshes[i].quaternion.copy(boxes[i].quaternion);
        // }
    }

    controls.update(Date.now() - time);
    renderer.render(scene, camera);
    time = Date.now();

}
