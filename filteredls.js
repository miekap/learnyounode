var fs = require('fs'),
    path = require('path'),
    pathToDir = process.argv[2],
    fileExt = "." + process.argv[3];

fs.readdir(pathToDir, function(err, files) {
  var filterFiles = files.filter(function(file) {
    return path.extname(file) == fileExt;
  });
  console.log(filterFiles.join('\n'));
/*
  console.log(files.filter(function(file) {
    return path.extname(file) == fileExt;
  }).join('\n'));
*/
});
