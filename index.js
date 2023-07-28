const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {




// sourcery skip: avoid-using-var
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    var method = req.method.toLowerCase();

    res.end('Hello World!\n');

    console.log('Request recieved on this path: ' + trimmedPath + 'with method:'+ method);
});



server.listen(3000,function(){
    console.log('Server is running on port 3000')});