const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    let q = url.parse(req.url, true);
    let filename = './routes' + q.pathname;
    if(filename === './routes/'){
        filename = './routes/index.html';
    }
    fs.readFile(filename, function(err, data){
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        if(data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();
        }
    });
}).listen(8080);