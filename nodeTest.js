var net = require('net');
var server = net.createServer();

server.listen(3000, () => console.log('listening to port 3000'));
server.on('connettion', (stream) => {
    console.log("Accepting connection from", stream.remoteAddress);
    stream.on("data", (data) => {
        stream.write(data);
    })
    stream.on("end", (data) => {
        console.log("Connection closed");
    })
})
