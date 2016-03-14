// var config = require('../config');
//
// var gulp    = require('gulp'),
//     plumber = require('gulp-plumber'),
//     path    = require('path'),
//     sync    = require('browser-sync'),
//     uglify  = require('gulp-uglify'),
//     include = require('gulp-include');
//
// module.exports = function () {
//     var pipe = gulp.src(path.join(config.src_javascripts, '/[^_]*.js'))
//         .pipe(plumber())
//         .pipe(include());
//
//     if (config.environment == 'prod') {
//         pipe.pipe(uglify())
//     }
//
//     pipe.pipe(gulp.dest(config.dist_javascripts))
//         .pipe(sync.reload({stream: true}));
//
//     return pipe;
// };

var config = require('../config');

var source     = require('vinyl-source-stream'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    path       = require('path'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    reactify   = require('reactify'),
    watchify   = require('watchify'),
    notify     = require("gulp-notify");

function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title:   "Compile Error",
        message: "<%= error.message %>"
    }).apply(this, args);
    this.emit('end'); // Keep gulp from hanging on this task
}

// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
    var props   = {
        // transform:    [babelify, reactify],
        cache:        {},
        packageCache: {},
        fullPaths:    true,
        entries:      [path.join(config.src_javascripts, file)]
    };
    var bundler = function () {
        return watch ? watchify(props) : browserify(props);
    }().transform(babelify, {presets: ["es2015", "stage-0", "react"]}).transform(reactify).transform('browserify-shim');

    function rebundle() {
        var stream = bundler.bundle(); //.bundle({debug: true});
        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(gulp.dest(config.dist_javascripts));
    }

    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}


module.exports = buildScript;