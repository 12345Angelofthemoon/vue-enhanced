const gulp = require('gulp'),
  watch = require('gulp-watch');
  ts = require('gulp-typescript'),
  run = require('gulp-run'),
  clean = require('gulp-clean');

gulp.task('watch', ()=>{
  return watch('./1.ts', ()=>{
    gulp
    .src('./1.ts')
    .pipe(ts({
      target: 'ES6',
      outFile: '1.js',
      experimentalDecorators: true
    }))
    .on('error', err=>{
      // console.error(err);
    })
    .pipe(gulp.dest('build'))
    .pipe(run('node build/1.js'));
  })
});
