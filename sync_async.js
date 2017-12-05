var fs = require('fs');

// sync
console.log('sync의 동작');
var data1 = fs.readFileSync('example.txt', {encoding:'utf8'});
console.log(data1);


// async
console.log('async 동작');
fs.readFile('example.txt', { encoding:'utf8'}, function(err, data){
  console.log(data);
});
