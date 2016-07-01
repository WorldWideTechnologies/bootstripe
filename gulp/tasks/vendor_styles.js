var config = require('../config');

var gulp  = require('gulp'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    minify = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),

module.exports = function () {
    return gulp.src(config.files.vend_stylesheets)
        .pipe(plumber())
        .pipe(concat(config.vend_main_css))
        .pipe(autoprefixer({browsers: config.autoprefix}))
        .pipe(minify({safe: true, discardDuplicates: false, verbose: true}))
        .pipe(gulp.dest(config.dist_stylesheets))
};
