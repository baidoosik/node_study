// express에서

var express = require('express');
var app = express();

// template engine 셋팅
app.set('view engine', 'jade');
// template engine 디렉토리 설정
app.set('views', './views');
app.use(express.static('public'));


//route and controller
app.get('/template', function(req, res){
  res.render('temp');
})
app.get('/', function(req, res){
  res.send('hello node world!');
});
app.get('/login', function(req, res){
  res.send('login node world!, <img src="/dining.png">');
});
app.get('/dynamic', function(req, res){
  var lis ='';
  for (var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var now = Date();
  var output = `
  <!doctype html>
  <html>
  <head
    <meta charset="utf-8">
    <title>Node app</title>
  </head>
  <body>
    <h1> hello Node world</h1>
    <img src='/dining.png'>
    <ul>
    ${lis}
    </ul>
    ${now}
  </body>
  </html>
`;
  res.send(output);
})
app.use(express.static('public'));
// app 의 port 지정
app.listen(3000, function(){
  console.log('connnect 3000 port');
});
