var gulp = require('gulp');
var robot = require('gulp-robots');
var config = require('../config').robot;

gulp.task('robot', function() {

    return gulp.src(config.public + '/index.html').pipe(robot({
        out: config.out,
        disallow: '*'
    }));
});
