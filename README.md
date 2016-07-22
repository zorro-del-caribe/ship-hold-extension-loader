# ship-hold-extension-loader

[![CircleCI](https://circleci.com/gh/zorro-del-caribe/ship-hold-extension-loader.svg?style=svg)](https://circleci.com/gh/zorro-del-caribe/ship-hold-extension-loader)

loads ship-hold extension based on convention

## install

``npm install ship-hold-extension-loader``

## usage

assuming you have

```
.
|
|---sh-extensions
|     |----ext.js
|     |----otherExt.js

```

ext.js and otherExt.js following the following pattern

```javascript
module.exports = function (h){
 return {
   table:'users',
   columns:{},
   relations:{}
 };
};
```

then use **ship-hold-extension-loader**
 
 ```javascript
 const sh = require('ship-hold')(/* options */);
 const extLoader = require('ship-hold-extension-loader'); // can pass options here
 
 extLoader(sh,options);
 
 ```
 
 options to pass to the factory
 
 * folder: the folder to read through to find the extension files (default './sh-extensions')
 * exclude: an array of file to exclude (default empty array)

