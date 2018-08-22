'use strict';
 
var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');
 
gulp.task('default', function () {
  return gulp.src('src/scss/**/*.s+(a|c)ss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
