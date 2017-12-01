const http = require('http');

const hostname = '127.0.0.1';
const port = 1337;

// web server application 을 만드는 코드
http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
