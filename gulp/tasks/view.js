var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('view', function() {
    var locals = {};

    gulp.src('./app/views/*.jade')
        .pipe(jade({
            locals: locals
        }))
        .pipe(gulp.dest('./public'));
});
