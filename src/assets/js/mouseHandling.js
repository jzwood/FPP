var instructions = false,
levels = false,
animating = false

var l0, l1, l2, c_boxes

window.onload = function() {
  body = document.body,
  l0 = document.querySelector('.layer0'),
  l1 = document.querySelector('.layer1'),
  c1 = document.querySelector('.content1'),
  l2 = document.querySelector('.layer2'),
  c_boxes = document.querySelectorAll('.c_box')
}

function home(){
  if(!animating){
    if(levels) showLevels()
    if(instructions) howto()
  }
}

function howto() {
  if(levels) showLevels()

  // if(!animating){
  animating = true
  l1.classList.toggle("minified")
  body.classList.toggle('scroll-lock')
  var showlevels = setTimeout(function() {
    body.classList.toggle('layer1')
    c1.classList.toggle('hide')
    body.classList.toggle('scroll-lock')
    animating = false
  }, instructions ? 0 :1000)
  instructions = !instructions
  // }
}

function showLevels() {

  if(instructions) howto()

  // if(!animating){
  animating = true

  l2.classList.toggle("minified")

  var showlevels = setTimeout(function() {
    for (var i = 0, len = c_boxes.length; i < len; i++) {
      c_boxes[i].classList.toggle('hide')
    }
    document.body.classList.toggle('layer2')
    animating = false

  }, levels ? 0 : 1000)
  levels = !levels
  // }

}
