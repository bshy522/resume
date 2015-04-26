var gulp = require('gulp');
var webpack = require('gulp-webpack');

var config = require('../config');

gulp.task('webpack', ['view'], function() {

    var webpackConfig = global.webpackConfig;

    return gulp.src(webpackConfig.entry)
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(config.dest));
});
