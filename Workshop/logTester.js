var Logger = require('./logger');
var logger = new Logger();
logger.log('my error message');
var messageCount = 0;
logger = new Logger(function(msg){
messageCount++;
});

logger.log('my error message');
logger.log('my error message');

console.log(messageCount); // 2