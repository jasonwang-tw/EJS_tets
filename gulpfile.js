// gulpfile.js
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const sass = require('gulp-sass');


// 編譯 EJS
gulp.task('ejs', function () {
  return gulp.src('./app/*.ejs')
    .pipe(ejs())
    .pipe(rename({ extname: '.html' }))
    .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function () {     // 定義 sass 的任務名稱
  return gulp.src('./app/scss/*.scss') // sass 的來源資料夾
    .pipe(sass(                     // 編譯 sass
      {outputStyle: 'expanded'}     // sass 的輸出格式
    ).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css')); // sass 編譯完成後的匯出資料夾
});

// 資料夾監控
gulp.task('all:watch', function () {
  gulp.watch('./app/*.ejs', gulp.parallel('ejs'));
  gulp.watch('./app/scss/*.scss', gulp.parallel('sass')); 
  // 監控資料夾，當有變化時執行 'ejs/sass' 任務
});
