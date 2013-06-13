process.argv;
var fs = require('fs');

fs.readFile(process.argv[2], function(err, contents){
if(err) 
    return console.log("Couldn't open the file!!!");
var noOfLine = contents.toString().split('\n').length
console.log (noOfLine)
});
