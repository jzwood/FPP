var gulp = require('gulp'),
autoprefixer = require('gulp-autoprefixer'),
connect = require('gulp-connect')

gulp.task('prefix', function () {
    return gulp.src('src/app.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
})

gulp.task('connect', function() {
  connect.server({
    port: 4000,
    root: 'src'
  });
})
