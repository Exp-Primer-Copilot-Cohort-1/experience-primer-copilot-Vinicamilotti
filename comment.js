//create a webserver
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    var url = req.url;
    if(url === '/'){
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if(url === '/comment'){
        fs.createReadStream(__dirname + '/comment.json').pipe(res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
}).listen(1337);