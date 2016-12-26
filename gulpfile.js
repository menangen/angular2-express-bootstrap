"use strict";

const gulp = require("gulp"),
	  tsc = require("gulp-typescript"),
      sourcemaps = require('gulp-sourcemaps');


gulp.task('build:client', () => {
    var tsProject = tsc.createProject('client/src/tsconfig.json');
    var tsResult = gulp.src('client/src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('client/dist'));
});