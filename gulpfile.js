var gulp = require('gulp');
var mcss2scss = require('mcss2scss/src/gulp');

gulp.task('mass2scss', function() {
    return gulp.src('./node_modules/mass/mass/**')
    .pipe(mcss2scss({mass2scss: true}))
    .pipe(gulp.dest('./todo'));
});

gulp.task('default', ['mass2scss']);