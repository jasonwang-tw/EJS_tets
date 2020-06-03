// gulpfile.js
const gulp = require('gulp');
// var ejs = require("gulp-ejs");
const sass = require('gulp-sass');

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//     gulp.src("./app/*.ejs")
//     .pipe(ejs({
//         msg: "Hello Gulp!"
//     }))
//     .pipe(gulp.dest("./dist"))
// }

// gulp.task('ejs:watch', function () {
//     gulp.watch("./app/*.ejs", ['defaultTask']); 
//     // 監控資料夾，當有變化時執行 'sass' 任務
//   });

gulp.task('sass', function () {     // 定義 sass 的任務名稱
  return gulp.src('./app/*.scss') // sass 的來源資料夾
    .pipe(sass(                     // 編譯 sass
      {outputStyle: 'expanded'}     // sass 的輸出格式
    ).on('error', sass.logError))
    .pipe(gulp.dest('./dist')); // sass 編譯完成後的匯出資料夾
});

gulp.task('sass:watch', function () {
  gulp.watch('./app/*.scss', gulp.parallel('sass')); 
  // 監控資料夾，當有變化時執行 'sass' 任務
});
