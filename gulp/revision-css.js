var gulp = require('gulp');
var rev = require('gulp-rev');
module.exports = function (dest) {
    return function () {
        return gulp.src([dest + "/stylesheets/**/*.css"])
            .pipe(rev())
            .pipe(gulp.dest(dest + '/stylesheets'))
            .pipe(rev.manifest())
            .pipe(gulp.dest('./'))
    };
};
