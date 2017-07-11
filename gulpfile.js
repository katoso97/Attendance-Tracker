var gulp     = require('gulp');
var sass     = require('gulp-sass');
var uglify   = require('gulp-uglify');
var concat   = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var gutil = require('gulp-util');



/* FILE SOURCES */

var source = [ ['app/frontend/sass/**/*.scss'], ['app/frontend/js/**/*.js'], ['app/frontend/jquery/**/*.js'] ];

/* SCSS TASKS */

gulp.task('sass', function() {
  return gulp.src('app/frontend/sass/main.scss')
  .pipe(sass({
    outputStyle: 'compressed'
  }))
  .pipe(gulp.dest('app/frontend/dist/css'));
});

gulp.task('sass:watch', function() {
  return gulp.watch(source[0], ['sass']);
});

/* JAVASCRIPT TASKS */

gulp.task('uglify', function() {
  return gulp.src(source[1])
  .pipe(uglify({
    mangle: false
  }))
  .pipe(gulp.dest('app/frontend/tmp/js'));
});

gulp.task('concat', function() {
  return gulp.src('app/frontend/tmp/js/**/*.js')
  .pipe(concat('main.js'))
  .pipe(gulp.dest('app/frontend/dist/js/'));
});

gulp.task('js', ['uglify', 'concat']);

gulp.task('js:watch', function() {
  return gulp.watch(source[1], ['js']);
});

/* JQUERY TASKS */

gulp.task('uglify-jquery', function() {
  return gulp.src(source[2])
  .pipe(uglify({
    mangle: false
  }))
  //Catching errors
  gulp.uglify().on('error', function(err) {
  gutil.log(gutil.colors.red('[Error]'), err.toString());
  this.emit('end');
  })
  //end of error handling
  .pipe(gulp.dest('app/frontend/tmp/jquery'));
});

gulp.task('concat-jquery', function() {
  return gulp.src('app/frontend/tmp/jquery/**/*.js')
  .pipe(concat('ui.js'))
  .pipe(gulp.dest('app/frontend/dist/js/'));
});

gulp.task('jquery', ['uglify-jquery', 'concat-jquery']);

gulp.task('jquery:watch', function() {
  return gulp.watch(source[2], ['jquery']);
});

/* IMAGE COMPRESION TASKS */

gulp.task('imagemin', function() {
  return gulp.src('app/frontend/assets/gfx/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('app/frontend/assets/gfx-c'));
});

/* BUILD TASKS */

gulp.task('build', ['sass', 'js', 'jquery', 'imagemin']);

gulp.task('build:watch', function() {
  return gulp.watch(source, ['build']);
});

/* DEFAULT TASK */

gulp.task('default', ['build']);
