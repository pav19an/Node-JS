// How Node Js differrs from Vanilla Js

// 1. Node runs on a server - not in a browser (backend not frontend)
// 2. Console is the terminal window.
// 3. global object instead of window object.
// 4. Has common core modules that we will explore.
// 5. Common JS modules instead of ES6 modules
// 6. Missing some JS API's like fetch
console.log("Hello World");
console.log(global);
const os = require('os')
console.log(os.type());
console.log(os.version());
console.log(os.homedir());
const path = require('path');
console.log(__dirname);
console.log(__filename);
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
const math = require('./math');
console.log(math.add(2, 3));
console.log(math.subtract(5, 8));
console.log(math.multiply(10, 18));
console.log(math.divide(12, 13));
const { add, subtract, multiply, divide } = require('./math');
console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));
