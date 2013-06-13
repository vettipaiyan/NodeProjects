require('module');
var Element = require('./radioactive_element');
var logDecay = function(element){
console.log('decayed: ' + element.symbol);
};
var logDead = function(element){
console.log('died: ' + element.symbol);
};
var element = new Element('AU', 10, 300);
element.on('decay', logDecay);
element.on('dead', logDead);
var element = new Element('H', 8, 500);
element.on('decay', logDecay);
element.on('dead', logDead);