var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
connect = require('gulp-connect'),
rename = require("gulp-rename"),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
cleanCSS = require('gulp-clean-css'),
htmlmin = require('gulp-htmlmin'),
imagemin = require('gulp-imagemin')

var path = {
  'html' : 'src/**/*.html',
  'css' : 'src/**/*.css',
  'homeJs' : 'src/home/js/**/*.js',
  'homeJsDest' : 'build/home/'
}

var game = {
  root : './src/game/js/',
  dest : 'build/game/',

  alljs : './src/game/js/**/*.js',

  three : 'libs/Three.min.js',
  cannon : 'libs/cannon.min.js',
  pointerCTRL : 'libs/PointerLockControls.js',
  lcs : 'gameComponents/lightsCameraScene.js',
  geo : 'gameComponents/geometry.js',
  pointer : 'gameComponents/pointerlock.js',
  rooms : 'gameComponents/rooms/*.js',
  build : 'gameComponents/buildScene.js',
  sky : 'gameComponents/skybox.js',
  player : 'gameComponents/player.js',
  animate : 'gameComponents/animate.js',
  main : 'main.js'
}

gulp.task('image-min', () =>
    gulp.src('src/assets/**')
        .pipe(imagemin())
        .pipe(gulp.dest('build/assets'))
)

gulp.task('html', function() {
  return gulp.src(path.html)
    .pipe(rename(function(path){
      path.dirname = path.basename
      path.basename = 'index'
      return path
    }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./build'))
})

// autoprefixes & minifies css
gulp.task('css', function () {
  return gulp.src(path.css)
      .pipe(rename(function(path){
        path.dirname = path.basename
        path.basename = 'styles.min'
        return path
      }))
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(cleanCSS())
      .pipe(gulp.dest('./build'))
})

// merges all js into one file & uglifies
gulp.task('game-js', function() {
  var scripts = [ game.three, game.cannon, game.pointerCTRL,
                  game.lcs, game.geo, game.pointer,
                  game.rooms, game.build, game.sky,
                  game.player, game.animate, game.main ]
  for (var i = 0, len = scripts.length; i < len; i++) {
    scripts[i] = game.root + scripts[i]
  }
  return gulp.src(scripts.slice(1))
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(game.dest))
})

// merges all js into one file & uglifies
gulp.task('home-js', function() {
  return gulp.src(path.homeJs)
    .pipe(concat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(path.homeJsDest))
})

gulp.task('watch', function() {
    gulp.watch(path.html, ['html'])
    gulp.watch(path.css, ['css'])
    gulp.watch(game.alljs, ['game-js'])
    gulp.watch(path.homeJs, ['homeJs'])
})

gulp.task('connect', function() {
  connect.server({
    port: 4000,
    root: '.'
  })
})

gulp.task('build',['html','css','home-js','game-js'])

gulp.task('default',['watch','connect'])
