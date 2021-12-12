var http = require('http')

http
.createServer((req, res) => {
    res.writeHead(200)
    res.write("Hello, world!");
    res.end()
    
}).listen(8080);