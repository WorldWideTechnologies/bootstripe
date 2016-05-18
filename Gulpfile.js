var _     = require('lodash'),
    path  = require('path'),
    sync  = require('browser-sync'),
    gulp  = require('gulp'),
    watch = require('gulp-watch'),
    argv = require('yargs').argv,
    buildScriptsTask = require('./gulp/tasks/scripts');

var config = require('./gulp/config');
if(typeof argv.prod !== 'undefined'){
   config.environment = 'prod';
}

gulp.task('bower', require('./gulp/tasks/bower'));
gulp.task('clean', require('./gulp/tasks/clean'));
gulp.task('vendor-styles', require('./gulp/tasks/vendor_styles'));
gulp.task('styles', require('./gulp/tasks/styles'));
gulp.task('vendor-scripts', require('./gulp/tasks/vendor_scripts'));
gulp.task('images', require('./gulp/tasks/images'));
gulp.task('fonts', require('./gulp/tasks/fonts'));

// Need a copy task for light gallery fonts

gulp.task('watch', function () {
    gulp.watch(path.join(config.src_stylesheets, '/**/*.scss'), gulp.series('styles'));
});


gulp.task('scripts', function (done) {
    return buildScriptsTask(config.src_main_js, false, done);
});


gulp.task('scripts:watch', function (done) {
    return buildScriptsTask(config.src_main_js, true, done);
});

gulp.task('build', gulp.series(
    'bower',
    'clean',
    gulp.parallel('vendor-styles', 'styles', 'vendor-scripts', 'scripts', 'images', 'fonts')
));

gulp.task('default', gulp.series(
    'bower',
    'clean',
    gulp.parallel('vendor-styles', 'styles', 'vendor-scripts', 'images', 'fonts'),
    'scripts:watch',
    'watch'
));