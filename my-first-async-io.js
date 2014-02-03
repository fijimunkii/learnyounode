var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
  var numLines = data.toString().split('\n').length - 1;
  console.log(numLines);
});
