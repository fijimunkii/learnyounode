/*
var http = require('http'),
    concat = require('concat-stream'),
    async = require('async'),
    urlCollection = [],
    results = [];

function httpCollect(url) {
  http.get(url, function(response) {
    response.pipe(concat(function(data) {
      return data.toString();
    }));
  });
}

for (var i=2; i<process.argv.length; i++) {
  urlCollection.push(function() {
    results.push(httpCollect(process.argv[i]));
    if (results.length === 3) {
      for (var i=0;i<results.length;i++) {
        console.log(results[i]);
      }
    }
  });
}

async.series(urlCollection);

*/

var http = require('http'),
    concat = require('concat-stream'),
    results = [],
    count = 0;

function printResults () {
  for (var i = 0; i < 3; i++) {
    console.log(results[i]);
  }
}

function httpGet(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(concat(function(data) {
      results[index] = data.toString()
      count++
      if (count == 3) { printResults(); }
    }));
  });
}

for (var i=0; i<3; i++) {
  httpGet(i);
}
