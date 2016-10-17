var gulp = require('gulp');
// var sass = require('gulp-sass');
var stylus = require('gulp-stylus');
var please = require('gulp-pleeease');
var minify = require('gulp-minify');
// var spritesmith = require('gulp.spritesmith');
// var importer = require('gulp-fontello-import');
//var imagemin = require('gulp-imagemin');

// include, if you want to work with sourcemaps
var sourcemaps = require('gulp-sourcemaps');

// // gulp.task('imgmin', function() {
// return gulp.src('min/*')
//         .pipe(imagemin({
//             progressive: true,
//             optimizationLevel: 5
//         }))
//         .pipe(gulp.dest('images'));
// });

// gulp.task('sprite', function () {
//     var spriteData = gulp.src('images_to_sprite/*.png')
//         .pipe(spritesmith({
//             imgName: 'sprite.png',
//             cssName: 'sprite.css',
//             padding: 10
//         }));
//     return spriteData.pipe(gulp.dest('./sprites/'));
// });


//gulp.task('font', ['import-svg'], function(cb) {
//    importer.getFont({
//        host           : 'http://fontello.com',
//        config         : 'config.json',
//        css : '/sprites/css',
//        font : '/sprites/fonts'
//    },cb);
//});

gulp.task('styl', function () {
    gulp.src('./stylus/*.styl')
        .pipe(stylus())
        .pipe(please({   autoprefixer: {
            "browsers": ["last 4 versions", "ios 6"]
        }}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['styl'], function () {
    gulp.watch('./stylus/*.styl', ['styl']);
});

// gulp.task('sass', function () {
//     gulp.src('./scss/*.scss')
//         .pipe(sass({outputStyle: 'compressed'}))
//         .pipe(gulp.dest('./css'));
// });

// gulp.task('sass:watch', function () {
//     gulp.watch('./sass/*.scss', ['sass']);
// });

// gulp.task('compress', function() {
//     gulp.src('./js/js-materialize/*.js')
//         .pipe(minify({
//             exclude: ['bin','date_picker']
//         }))
//         .pipe(gulp.dest('./js/'))
// });
//
// gulp.task('import-svg', function(cb) {
//     importer.importSvg({
//         config : 'config.json',
//         svgsrc : 'svg-src'
//     }, cb);
// });
//
//
// gulp.task('font', ['import-svg'], function(cb) {
//     importer.getFont({
//         host : 'http://fontello.com',
//         config: 'config.json'
//     }, cb);
// });