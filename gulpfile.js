var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    livereload = require('gulp-livereload'),
    prefix = require('gulp-autoprefixer');

// Scripts task
//uglifies
gulp.task('scripts', function(){
  gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Scripts task
//compile sass
gulp.task('styles', function(){
  return sass('scss/main.scss', {style: 'expanded'})
    .on('error', sass.logError)
    .pipe(prefix('last 15 versions'))
    .pipe(gulp.dest('build/css/'))
    .pipe(livereload());
});

//Watch task
//Watches JS
gulp.task('watch', function(){
  livereload({ start: true });
  livereload.listen();
  gulp.watch('js/*.js', ['scripts']);
  gulp.watch('scss/**/*.scss', ['styles']);
  gulp.watch('index.html', ['styles']);
})


gulp.task('default',['scripts', 'styles', 'watch']);
