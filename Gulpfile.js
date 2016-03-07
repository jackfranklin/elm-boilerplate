var gulp = require('gulp');
var liveServer = require('live-server');
var $ = require('gulp-load-plugins')({});

gulp.task('build', function() {
  return gulp.src('App.elm')
    .pipe($.plumber())
    .pipe($.elm({ warn: true }))
    .pipe(gulp.dest('build/'));
});

gulp.task('start', ['build'], function() {
  gulp.watch('**/*.elm', ['build']);
});

gulp.task('test', function() {
  return gulp.src('TestRunner.elm').pipe($.shell([
    './node_modules/.bin/elm-test <%= file.path %>'
  ]));
});

gulp.task('serve', function() {
  var params = {
    open: false, // When false, it won't load your browser by default.
  };

  liveServer.start(params);
});
