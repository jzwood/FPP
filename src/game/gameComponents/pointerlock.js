FPP.POINTERLOCK = (function(window, document, undefined) {

	var pl = new function() {
		this.blocker = document.getElementById('blocker')
		this.instructions = document.getElementById('instructions')
		this.havePointerLock = 'pointerLockElement' in document || 'mozPointerLockElement' in document || 'webkitPointerLockElement' in document
	}

	pl.init = function() {

		if (pl.havePointerLock) {

			var element = document.body;

			var pointerlockchange = function(event) {

				if (document.pointerLockElement === element || document.mozPointerLockElement === element || document.webkitPointerLockElement === element) {

					FPP.PLAYER.controls.enabled = true;

					pl.blocker.style.display = 'none';

				} else {

					FPP.PLAYER.controls.enabled = false;

					pl.blocker.style.display = '-webkit-box';
					pl.blocker.style.display = '-moz-box';
					pl.blocker.style.display = 'box';

					pl.instructions.style.display = '';

				}

			}

			var pointerlockerror = function(event) {
				pl.instructions.style.display = '';
			}

			// Hook pointer lock state change events
			document.addEventListener('pointerlockchange', pointerlockchange, false);
			document.addEventListener('mozpointerlockchange', pointerlockchange, false);
			document.addEventListener('webkitpointerlockchange', pointerlockchange, false);

			document.addEventListener('pointerlockerror', pointerlockerror, false);
			document.addEventListener('mozpointerlockerror', pointerlockerror, false);
			document.addEventListener('webkitpointerlockerror', pointerlockerror, false);

			pl.instructions.addEventListener('click', function(event) {
				//firstPerson.position.set(0, 5, 0);
				pl.instructions.style.display = 'none';

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

			pl.instructions.innerHTML = 'Your browser doesn\'t seem to support Pointer Lock API';

		}
	}

	return pl

})(window, document)
