var instructions = false,
levels = false

var l0, l1, l2, c_boxes

window.onload = function() {
  l0 = document.querySelector('.layer0'),
  l1 = document.querySelector('.layer1'),
  l2 = document.querySelector('.layer2'),
  c_boxes = document.querySelectorAll('.c_box')
}

function howto() {
  l1.classList.toggle("minified")
  var showlevels = setTimeout(function() {
    document.body.classList.toggle('layer1')
  }, instructions ? 0 :1000)
  instructions = !instructions
}

function showLevels() {
  l2.classList.toggle("minified")

  var showlevels = setTimeout(function() {
    c_boxes.forEach(function(box) {
      box.classList.toggle('hide')
    })
    document.body.classList.toggle('layer2')
  }, levels ? 0 : 1000)

  levels = !levels

}
