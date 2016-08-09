var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
connect = require('gulp-connect'),
rename = require("gulp-rename")

gulp.task('prefix', function () {
    gulp.src('src/assets/css/gamestyles.css')
        .pipe(rename(function(path){
          path.basename += '-build'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/assets/css/build'))

    gulp.src('src/assets/css/homestyles.css')
        .pipe(rename(function(path){
          path.basename += '-build'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/assets/css/build'))
})

gulp.task('connect', function() {
  connect.server({
    port: 4000,
    root: 'src'
  })
})
