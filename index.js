//載入express模組
let express = require('express');


// 使用express
let app = express();


app.get('/', function (req, res) {
  res.render('index', {
      'title': '首頁',
      'titleH2': '<h2>第二級標題</h2>',
      'show': false,
      'foods': ['apple', 'banana', 'mongo']
  });
});
app.get('/user', function (req, res) {
  res.render('user',{
    'title': '使用者',
  });
});


//設定port位置
let port = 3000;
// 監聽 port
app.listen(port);

let engine = require('ejs-locals');

app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');
