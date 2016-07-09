var instructions = false,
levels = false

var l0, l1, l2, c_boxes

window.onload = function() {
  l0 = document.querySelector('.layer0'),
  l1 = document.querySelector('.layer1'),
  c1 = document.querySelector('.content1'),
  l2 = document.querySelector('.layer2'),
  c_boxes = document.querySelectorAll('.c_box')
}

function howto() {

  if(levels) showLevels()

  l1.classList.toggle("minified")
  var body = document.body
  body.style.overflow = 'hidden'
  var showlevels = setTimeout(function() {
    body.classList.toggle('layer1')
    c1.classList.toggle('hide')
    body.style.overflow = 'visible'
  }, instructions ? 0 :1000)
  instructions = !instructions
}

function showLevels() {

  if(instructions) howto()

  l2.classList.toggle("minified")

  var showlevels = setTimeout(function() {
    c_boxes.forEach(function(box) {
      box.classList.toggle('hide')
    })
    document.body.classList.toggle('layer2')
  }, levels ? 0 : 1000)
  levels = !levels

}
