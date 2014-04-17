# easy-guid [![Build Status](https://secure.travis-ci.org/easy-node/easy-guid.png?branch=master)](http://travis-ci.org/easy-node/easy-guid)

Clean and Easy GUID (v0.1.3)

## Getting Started
Install the module with: `npm install easy-guid`

## Usage
```javascript
var guid = require('easy-guid');
guid.new();   // "97e67ef28175180fffb85d4b9ef5b601"
guid.new(32); // "97e67ef28175180fffb85d4b9ef5b601"
guid.new(16); // "97e67ef28175180f"
```

## License
Copyright (c) 2014 Huei Tan. Licensed under the MIT license.
