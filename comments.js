// Create web server
// Create a simple web server using Node.js that responds to requests with a static page.
// The server should listen on port 8080 and serve up the file index.html from the current directory.
// The content of index.html can be anything you like.

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Internal Server Error');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
}).listen(8080)