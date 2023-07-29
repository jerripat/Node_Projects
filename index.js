const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder');

const server = http.createServer((req, res) => {




// sourcery skip: avoid-using-var
    var parsedUrl = url.parse(req.url, true);
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');

    var queryStringObject = parsedUrl.query;

    var method = req.method.toLowerCase();

    var headers = req.headers;

    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function(data) {
        buffer += decoder.write(data);
    });

    req.on('end', function() { 
        buffer += decoder.end();

        res.end('Hello World!\n');

        
        
        //if (trimmedPath !== 'favicon.ico') {
            //console.log(`Request received on this path: ${trimmedPath} with method: ${method} and these query string parameters: ${JSON.stringify(queryStringObject)}`);
            console.log(`Request recieved with this payload: ${buffer}`);
            //}
            
            //console.log(`Request recieved on this path: ${trimmedPath} with method:${method} and these query string paremeters:${queryStringObject}`);
        });
    });



server.listen(3000,function(){
    console.log('Server is running on port 3000')});