

function fb(){
  // encodeURIComponent("http://jzwood.github.io/FPP/src/index.html")
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 'share-facebook', 'width=626,height=436')
  return false
}


function twitter(){
  window.open('http://twitter.com/share?url=http://jzwood.github.io/FPP/src/fpp.html&text=Escape space prison in this 4D, first person, cosmic, physics puzzle.&via=14CodeMonkeys', 'facebook-share-dialog', 'width=500,height=310')
  return false
}
