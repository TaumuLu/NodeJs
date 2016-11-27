var http = require('http');
var url = require('url');

function start(route, handle) {
    function onRequest(req, res){
        // var postData = "";
        // req.setEncoding('utf-8');
        var pathname = url.parse(req.url).pathname;
        console.log('request for '+ pathname +' received')

        // req.addListener('data', function(postDataChunk){
        //     postData += postDataChunk;
        //     console.log('Received POST data chunk |'+ postDataChunk+ '|')
        // })
        // req.addListener('end', function(){
        //     route(handle, pathname, res, postData);
        // })
        route(handle, pathname, res, req);
        // var content = route(handle, pathname, res);
    }

    http.createServer(onRequest).listen(3000, '127.0.0.1');
    console.log('server has started');
}

exports.start = start;
