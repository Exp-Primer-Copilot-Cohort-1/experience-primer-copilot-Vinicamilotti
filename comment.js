//create a webserver
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    var realPath = path.join("public", pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function(exists){
        if(!exists){
            res.writeHead(404, {
            'Content-Type': 'text/plain'
        });
            res.write("This request URL " + pathname + " was not found on this server.");
            res.end();
        } else {
            fs.readFile(realPath, "binary", function(err, file){
                if(err){
                    res.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    res.end(err);
                } else {
                    var contentType = mine[ext] || "text/plain";
                    res.writeHead(200, {
                        'Content-Type': contentType
                    });
                    res.write(file, "binary");
                    res.end();
                }
            });
        }
    });
});

server.listen(3000, function(){
    console.log("Server is listening on 3000");
});

var mine = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};