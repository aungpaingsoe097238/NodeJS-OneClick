
const http = require('http');
const mongodb = require('mongodb');

http.createServer(function(req,res){
    res.write('Hello World');
    res.end();
}).listen(8000,'127.0.0.1');
console.log('server is running on 127.0.0.1 port 8000')