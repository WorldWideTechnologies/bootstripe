var config = require('../config');

var gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    path         = require('path'),
    sync         = require('browser-sync'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    minify       = require('gulp-cssnano');

module.exports = function () {
    var pipe = gulp.src(path.join(config.src_stylesheets, '/**/*.scss'))
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle:     'expanded',
            precision:       10,
            includePaths: config.bower,
            errLogToConsole: true
        }))
        .pipe(autoprefixer({browsers: config.autoprefix}));


    if (config.environment == 'prod') {
        pipe.pipe(minify({safe: true, discardDuplicates: false, verbose: true}))
    }

    pipe.pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.dist_stylesheets))
        .pipe(sync.reload({stream: true}));

    return pipe;
};
