# Gulp 環境建立

1. 安裝[Node.js](https://nodejs.org/zh-tw/)
2. 建立任一專案資料夾

> （以下步驟均在終端機執行）
3. 安裝 npm 指令工具 `npm install`
4. 初始化 package.json `npm init` (原則上一直enter即可)

* package.json : <br>npm 所安裝的所有套件，會顯示在dependencies的陣列欄位中
* 之後開新專案只需要置入package.json後執行 `npm install` 即立即安裝所有套件

5. 安裝 Gulp `npm install gulp`
6. 安裝 Gulp-sass `npm install gulp-sass`

## 啟動指令

1. 一般啟動指令 `node index.js`
* 核心檔案：index.js
* 參照路徑：package.json > "main" : index.js
* 因為沒有瀏覽器監控，因此需要時常重啟

2. gulp啟動指令 `gulp` 
* 核心檔案：gulpfile.js
* 若單獨啟動 gulp 個別功能則 `gulp 功能名稱`


## Gulp
Gulp主要有四個指令，用這些指令就可以完成大部份工作。

1. gulp.task(name, fn) 定義一個任務名稱，接下來指定任務的工作內容
2. gulp.run(task) 運行指定的任務
3. gulp.src(glob) 檔案來源
4. gulp.dest(folder) 檔案的存檔路徑

[參考教學](https://wcc723.github.io/gulp/2014/09/24/gulp-task/)


#### [gulp 3 遷移至 gulp 4](https://tzuhui.github.io/2019/08/29/JavaScript/gulp/gulp3-to-4/)

Gulp 4 介紹了新的組合任務方法：series()、parallel()

1. series() 按指定的順序一次運行一個任務
2. parallel() 以任何順序同時運行任務

## SCSS
[參考教學](https://wcc723.github.io/css/2016/12/10/gulp-init/)

## EJS
[參考教學](https://medium.com/@seanyeh/ejs%E6%A8%A3%E6%9D%BF%E5%BC%95%E6%93%8E%E7%9A%84%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F-40873ea2dfae)




