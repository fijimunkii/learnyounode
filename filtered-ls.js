/* var fs = require('fs'),
    directory = process.argv[2],
    fileExt = process.argv[3],
    extensionRegex = new RegExp("^.+\." + fileExt + "$");

fs.readdir(directory, function(err, list) {
  for (var i=0;i<list.length;i++) {
    if (list[i].match(extensionRegex)) {
      console.log(list[i]);
    }
  }
});

*/

var fs = require('fs'),
    path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  list.forEach(function(file) {
    if (path.extname(file) === "." + process.argv[3]) {
      console.log(file);
    }
  });
});
