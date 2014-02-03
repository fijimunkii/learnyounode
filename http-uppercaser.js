/*
var map = require('through2-map'),
    http = require('http'),
    
    server = http.createServer(function(req, res) {
      if (req.method != 'POST') {
        return res.end('send a POST');
      }

      req.pipe(map(function(message) {
        return message.toString().toUpperCase();
      })).pipe(res);
    });

server.listen(Number(process.argv[2]));
*/
