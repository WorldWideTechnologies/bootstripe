var config = require('../config');

var source     = require('vinyl-source-stream'),
    gulp       = require('gulp'),
    buffer     = require('vinyl-buffer'),
    es         = require('event-stream'),
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

// Based on: http://blog.revathskumar.com/2016/02/browserify-multiple-bundles.html
function buildScript(file, watch, done) {

    var bundler;

    if (!Array.isArray(file)) {
        file = [file];
    }

    var tasks = file.map(function (file) {
        var entry = path.join(config.src_javascripts, file);
        bundler   = browserify({
            entries:      [entry],
            cache:        {},
            packageCache: {},
            fullPaths:    watch
        }).transform(babelify, {presets: ["es2015", "stage-0", "react"]})
            .transform('browserify-shim')
            .transform(reactify);

        if (watch) {
            bundler = bundler.plugin(watchify);
        }

        function rebundle() {
            var stream = bundler.bundle(); //.bundle({debug: true});
            return stream.on('error', handleErrors)
                .pipe(source(file))
                .pipe(extension('.js'))
                .pipe(buffer())
                .pipe(gulp.dest(config.dist_javascripts));
        }

        bundler.on('update', function () {
            rebundle();
            gutil.log('Rebundle...');
        });
        return rebundle();

    });

    es.merge(tasks).on('end', done);
}


module.exports = buildScript;