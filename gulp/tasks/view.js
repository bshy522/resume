var gulp = require('gulp');
var jade = require('gulp-jade');

var config = require('../config').view;

gulp.task('view', function() {
    var locals = {};

    return gulp.src(config.src)
        .pipe(jade({
            locals: locals
        }))
        .pipe(gulp.dest(config.dest));
});
