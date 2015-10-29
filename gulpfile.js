var gulp = require('gulp'),
    compass = require('gulp-compass'),
    minifyCSS = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect');


//styles task
// Runs sass through compass, minifies and outputs to dist/

gulp.task('connect', function() {
  connect.server({
    port: 8888,
    root: 'app',
    livereload: true
  });
});

gulp.task('styles', function () {
  gulp.src('app/sass/*.scss')
    .pipe(plumber())
    .pipe(compass({
      css: 'app/css',
      sass: 'app/sass'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/css'))
    .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('app/**/*.html')
    .pipe(connect.reload());
})

// Watch Task
// Watches for changes to file structure
gulp.task('watch', function () {
  gulp.watch('app/sass/*.scss', ['styles'])
  gulp.watch('app/**/*.html', ['html'])
});

gulp.task('default',  ['connect', 'styles', 'watch']);