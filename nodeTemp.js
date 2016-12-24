var fs = require('fs');
var path = require('path');

var dir = process.cwd();
var files = fs.readdirSync(dir);
process.stdout.write("Name\tSize\tData\n");

files.forEach((filename) => {
    var fullname = path.join(dir, filename);
    var stats = fs.statSync(fullname);
    if(stats.isDirectory()) filename += "/";
    process.stdout.write(filename + "\t" +
                         stats.size + "\t" +
                         stats.mtime + "\n");
})


var net = require('net');
var server = net.createServer();

server.listen(80, () => console.log('listening to port 80'));
server.on('connettion', (stream) => {
    console.log("Accepting connection from", stream.remoteAddress);
    stream.on("data", (data) => {
        stream.write(data);
    })
    stream.on("end", (data) => {
        console.log("Connection closed");
    })
})
