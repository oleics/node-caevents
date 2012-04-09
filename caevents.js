
exports.EventEmitter = CAEventEmitter;

var util = require('util'),
    EventEmitter = require('events').EventEmitter;

var defaultMaxListeners = 10;

function CAEventEmitter() {
  if(!(this instanceof CAEventEmitter)) return new CAEventEmitter();
  
  this._anyEvents = [];
}
util.inherits(CAEventEmitter, EventEmitter);

CAEventEmitter.prototype.emit = function() {
  EventEmitter.prototype.emit.apply(this, arguments);
  
  this._anyEvents.forEach(function(listener) {
    listener.apply(this, arguments);
  });
};

CAEventEmitter.prototype.addListener = function() {
  if(arguments.length === 1 && typeof arguments[0] instanceof Function) {
    this.onAny(arguments[0]);
  } else {
    EventEmitter.prototype.addListener.apply(this, arguments);
  }
};
CAEventEmitter.prototype.on = CAEventEmitter.prototype.addListener;

CAEventEmitter.prototype.onAny = function(listener) {
  var m;
  if (this._maxListeners !== undefined) {
    m = this._maxListeners;
  } else {
    m = defaultMaxListeners;
  }
  if (m && m > 0 && this._anyEvents.length > m) {
    console.error('(node) warning: possible EventEmitter memory ' +
                  'leak detected. %d listeners added. ' +
                  'Use emitter.setMaxListeners() to increase limit.',
                  this._anyEvents.length);
    console.trace();
  }
  this._anyEvents.push(listener);
};
