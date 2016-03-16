var config = require('../config');

var source     = require('vinyl-source-stream'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    path       = require('path'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    reactify   = require('reactify'),
    watchify   = require('watchify'),
    notify     = require("gulp-notify"),
    extension  = require('gulp-ext-replace');

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

    var bundler;

    bundler = browserify({
        entries:      [path.join(config.src_javascripts, file)],
        cache:        {},
        packageCache: {},
        fullPaths:    watch
    }, watchify.args);

    if (watch) {
        bundler = watchify(bundler)
    }

    bundler
        .transform(babelify, {presets: ["es2015", "stage-0", "react"]})
        .transform('browserify-shim')
        .transform(reactify);


    function rebundle() {
        var stream = bundler.bundle(); //.bundle({debug: true});
        return stream.on('error', handleErrors)
            .pipe(source(file))
            .pipe(extension('.js'))
            .pipe(gulp.dest(config.dist_javascripts));
    }

    bundler.on('update', function () {
        rebundle();
        gutil.log('Rebundle...');
    });
    return rebundle();
}


module.exports = buildScript;