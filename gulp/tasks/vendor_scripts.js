var config = require('../config');

var gulp   = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

module.exports = function () {
    return gulp.src(Object.values(config.files.vend_javascripts))
        .pipe(plumber())
        .pipe(concat(config.vend_main_js))
        .pipe(uglify())
        .pipe(gulp.dest(config.dist_javascripts))
};