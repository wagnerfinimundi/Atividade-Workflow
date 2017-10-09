var gulp = require("gulp");
var htmlmin = require('gulp-htmlmin');
var sass = require("gulp-sass");
var rename = require('gulp-rename');


gulp.task('minify-css', function(){
    gulp.src('./source/scss/style.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'));
});
gulp.task("minify-html", function(){
	return gulp.src('./source/index.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'))
});

gulp.task('escutar-arq', function() {
    gulp.watch('source/scss/*.scss', ['compila-move-css']);
    gulp.watch('source/index.html', ['minify-html']);
});