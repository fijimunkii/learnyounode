var fs = require('fs'),
    fileBuffer = fs.readFileSync(process.argv[2]),
    file = fileBuffer.toString(),

    fileLines = file.split('\n'),

    numLines = fileLines.length - 1;

console.log(numLines);

