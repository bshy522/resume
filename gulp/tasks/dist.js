var gulp = require('gulp');

gulp.task('dist', ['robot', 'less', 'fonts', 'muiFonts'], function(cb) {
    global.webpackConfig = require('../webpack.dist.config.js');
    gulp.start('webpack', cb);
});
