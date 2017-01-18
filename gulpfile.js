var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('default', ['sass', 'watch'])

gulp.task('sass', function() {
	gulp.src('app/scss/**/*.scss')
		.pipe(sass({outputStyle:'expanded'})
			.on('error', sass.logError))
		.pipe(gulp.dest('app/css'));
});

gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
});