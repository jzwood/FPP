var instructions = false,
levels = false

var l1, l2

window.onload = function(){
  l1 = document.querySelector('.layer1'),
  l2 = document.querySelector('.layer2')
}

function howto(){
  l1.style.height = !instructions ? "5px" : "calc(100% - 97px)"
  instructions = !instructions
}

function showLevels(){
  l2.style.height = !levels ? "5px" : "calc(100% - 97px)"
  levels = !levels
}
