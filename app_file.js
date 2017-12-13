var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

var app = express();

app.locals.pretty = true;
app.use(express.static('public_file'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'jade');
app.set('views', './views_file');

app.get('/topic/new', function(req, res){
  res.render('form')
})

app.post('/topic', function(req,res){
  var title = req.body.title;
  var contents = req.body.description;
  fs.writeFile('data/'+title, contents, function(err){
    if(err){
      res.status(500).send('internal server error');
    }
    res.send('HI, SAVE YOUR DATA');
  });
})

app.listen(3000, function(){
  console.log('connnected');
})
