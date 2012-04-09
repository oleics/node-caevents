
caevents
========

### 'Catch all events' event emitter for node.js

### Installation

```npm install caevents```

### Usage Examples

```js
var emitter = new require('caevents').EventEmitter;

emitter.on(function(event_type, arg1, arg2, etc) {
});

emitter.onAny(function(event_type, arg1, arg2, etc) {
});

emitter.emit('hooray');
```

As if it were the core events-module:

```js
var events = require('caevents');
```

As if it were the core events-module: (Take 2)

```js
var EventEmitter = require('caevents').EventEmitter;
```

Overwrite core events.EventEmitter:

```js
require('events').EventEmitter = require('./caeventemitter').EventEmitter;
```

Class EventEmitter
--------------------

Inherits from events.EventEmitter

### Options

None.

### Properties

None.

### Methods

onAny(callback)  
on(event_type, callback) // normal behavior  
on(callback) // onAny behavior

### Events

As many as you want to.

### ToDo

* once() functionality.
* copy tests from nodejs

MIT License
-----------

Copyright (c) 2012 Oliver Leics <oliver.leics@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.