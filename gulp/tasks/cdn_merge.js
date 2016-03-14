var config = require('../config');

var gulp    = require('gulp'),
    plumber = require('gulp-plumber'),
    path    = require('path'),
    source  = require('vinyl-source-stream'),
    request = require('request'),
    merge   = require('merge2'),
    concat  = require('gulp-concat'),
    buffer  = require('gulp-buffer');

module.exports = function () {

    var prototype = request('https://cdnjs.cloudflare.com/')
        .pipe(plumber())
        .pipe(source('script.js'));
    var vend      = gulp.src(path.join(config.dist_javascripts, config.vend_main_js));

    return merge(prototype, vend)
        .pipe(plumber())
        .pipe(buffer())
        .pipe(concat(config.vend_main_cdn_js))
        .pipe(gulp.dest(config.dist_javascripts));
};