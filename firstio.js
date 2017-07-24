/*
var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var str = buf.toString();

var linesArray = str.split("\n");

var newLines = linesArray.length - 1;

console.log(newLines);
*/

console.log(require('fs').readFileSync(process.argv[2]).toString().split("\n").length - 1);
