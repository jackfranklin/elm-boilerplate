var gulp = require('gulp');
var liveServer = require('live-server');
var $ = require('gulp-load-plugins')({});

function watchElmAndRun(...args) {
  return gulp.watch('**/*.elm', args);
}

gulp.task('build', function() {
  return gulp.src('App.elm')
    .pipe($.plumber({
      errorHandler: $.notify.onError('Elm Compiler Error')
    }))
    .pipe($.elm.bundle('App.js', { warn: true }))
    .pipe(gulp.dest('build/'));
});

gulp.task('start', ['build'], function() {
  watchElmAndRun('build');
});

gulp.task('test', $.shell.task(['elm-test'], {
  ignoreErrors: true
}));

gulp.task('watch-test', ['test'], function() {
  watchElmAndRun('test');
});


gulp.task('serve', function() {
  liveServer.start({ open: false });
});
