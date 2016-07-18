var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();


//fecth newwest analytics

var download = require('gulp-download');

gulp.task('fetch-newest-analytics', function() {
  return download('https://www.google-analytics.com/analytics.js')
    .pipe(gulp.dest('assets/'));
});


// html minify

// var gulp = require('gulp'),
//     minifyHTML = require('gulp-minify-html');

// gulp.task('html', ['jekyll'], function() {
//     return gulp.src('_site/**/*.html')
//         .pipe(minifyHTML({
//             quotes: true
//         }))
//         .pipe(gulp.dest('_site/'));
// });
//


var imagemin = require('gulp-imagemin');

gulp.task('images', () =>
    gulp.src('assets/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('_site/assets/images'))
);




// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({
                      server: {baseDir: '_site/'},
                      open: false,
                      ghostMode: false
                      });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve', 'images']);