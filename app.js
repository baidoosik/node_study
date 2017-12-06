// express에서

var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello node world!');
});
app.get('/login', function(req, res){
  res.send('login node world!, <img src="/dining.png">');
});

app.use(express.static('public'));
// app 의 port 지정
app.listen(3000, function(){
  console.log('connnect 3000 port');
});
