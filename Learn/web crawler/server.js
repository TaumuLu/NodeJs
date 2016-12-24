// var http = require('http');
// var os = require('os');

// http.createServer(function (request, response) {

//      response.writeHead(200, {'Content-Type': 'text/plain'});
//      response.end('Hello World: Taumu');
// }).listen(3000);

// console.log('Server running at http://127.0.0.1:3000/');


// console.log('22323')





var http = require("http");
var url = require("url");

http.createServer(function(request, response) {

    // The response needs to handle all the headers, and the return codes
    // These types of things are handled automatically in server programs
    // like Apache and Tomcat, but Node requires everything to be done yourself
    response.writeHead(200, {"Content-Type": "text/plain"});

    var params = url.parse(request.url, true).query;
    var input = params.number;
    console.log('Refresh');
    // console.log('刷新');

    // These are the generic JavaScript methods that will create
    // our random number that gets passed back to the caller
    var numInput = new Number(input);
    var numOutput = new Number(Math.random() * numInput).toFixed(0);

    // Write the random number to response
    response.write(numOutput);
    response.write('刷新');

    response.end();

}).listen(3000);
console.log("Server running at http://127.0.0.1:3000/");

