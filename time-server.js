var strftime = require('strftime'),

    net = require('net'),
    server = net.createServer(function(socket) {
      var data = strftime('%F %R', new Date());
      socket.end(data);
    }),

    port = process.argv[2];

server.listen(port);
