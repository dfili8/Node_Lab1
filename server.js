"use strict";{

    const http = require('http');
    const motivationalQuote = require('./quotes');

    http.createServer(myRequest).listen(3000);

    function myRequest(request, response){
        response.writeHead(200, {"Content-type": "text/plain"});
        response.write(`${motivationalQuote.getQuote()}`);
        response.end();
    }
}