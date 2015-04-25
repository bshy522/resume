var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var gls = require('gulp-live-server');
var config = require('../config');

gulp.task('serve', ['setWatch', 'build'], function() {

    gulp.watch(config.less.watch, ['less']);
    gulp.watch(config.jsx.watch, ['webpack']);
    gulp.watch(config.view.watch, ['view']);

    //2. serve at custom port
    var server = gls.static('public', 3000);
    server.start();
});
