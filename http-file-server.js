var fs = require('fs'),
    http = require('http'),
    server = http.createServer(function(req, res) {
      fs.createReadStream(process.argv[3]).pipe(res);
    });

server.listen(parseInt(process.argv[2]));
