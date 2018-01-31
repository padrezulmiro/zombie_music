const gulp = require('gulp');
const rename = require('gulp-rename');
const babelify = require('babelify');
const bro = require('gulp-bro');

gulp.task('es6', () => {
    gulp.src('./main.js')
        .pipe(bro({
            transform: [
                babelify.configure({
                    presets: ['env']
                })
            ]
        }))
        .pipe(rename("zombie_music.js"))
        .pipe(gulp.dest('./'));
});
