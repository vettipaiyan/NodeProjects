 
var EventEmitter = require('events').EventEmitter;
var inherits = require('util').inherits;
function Element(symbol, startingSize, decayMs){
  this.symbol = symbol;
  this.size = startingSize;
 
  // preserve the scope so that we can use it inside a nested function, like checkDecay
  var self = this;
 
  var intervalHandle = setInterval(checkDecay, decayMs);
 
  function checkDecay(){
    var chance = Math.random();
    if (chance > 0.5) {
      self.size--;
      self.emit('decay', self);
 
      if(self.size == 0){
        self.emit('dead', self);
        //stop checking
        clearInterval(intervalHandle);
      }
    }
  }
};
 
//inherit the EventEmitter goodness
inherits(Element, EventEmitter);
module.exports = Element;