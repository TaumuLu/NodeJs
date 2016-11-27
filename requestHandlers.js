var exec = require('child_process').exec,
    querystring = require('querystring'),
    fs = require('fs'),
    formidable = require('formidable');

function start(res, req) {
    console.log('request handler "start" was called');
    // function sleep(milliSeconds) {
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }
    // sleep(10000);
    // exec('ls -lah',
    //     { timeout: 10000, maxBuffer: 20000*1024 },
    //     function(error, stdout, stderr){
    //     res.writeHead(200, {'Content-Type': 'text-plain;charset=utf-8'});
    //     res.write(stdout);
    //     res.end();
    // })

    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" enctype="multipart/form-data" method="post">'+
        '<input type="file" name="upload" />'+
        '<input type="text" name="title" />'+
        '<input type="submit" value="Submit text" />'+
        '</form>'
        '</body>'+
        '</html>';
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(body);
    res.end();
}

function upload(res, req) {
    console.log('request handler "upload" was called');

    // res.writeHead(200, {'Content-Type': 'text-plain'});
    // res.write('You sent the text: '+
    //     querystring.parse(req).title
    // );
    var form = new formidable.IncomingForm();
    // form.uploadDir = 'D:/Git/NodeJs/tmp';
    form.uploadDir = './tmp';
    console.log("about to parse");
    form.parse(req, function(error, fields, files){
        console.log('parding done');
        fs.renameSync(files.upload.path, './tmp/test.png');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('received image:<br />');
        res.write('<img src="/show">');
        res.end();
    })
    res.end();
}

function show(res, req) {
    console.log('request handler "show" was called');

    fs.readFile('./tmp/test.png', 'binary', function(error, file) {
        if(error) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write(error +'\n');
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'image/png'});
            res.write(file, "binary");
            res.end();
        }
    });
}


exports.start = start;
exports.upload = upload;
exports.show = show;
