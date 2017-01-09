var net = require('net'),
    util = require('util');

var server = net.createServer(function(socket) {
    console.log(socket);
    console.log('已连接');
    socket.on('data', function(data){
        socket.write(data);
    })

    socket.on('end', function(){
        console.log('连接断开');
    })

    socket.write('welcome net')
})

server.listen(6789, function(){
    console.log('server bound port 6789');
})



var client = net.connect({ port: 6789 }, function(){
    console.log('连接 6789')
    client.write('world');
})

client.on('data', function(data){
    console.log(data.toString());
    client.end()
})

client.on('end', function(){
    console.log('断开 6789');
})
