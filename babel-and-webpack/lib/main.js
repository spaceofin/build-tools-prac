"use strict";

var _mathUtils = require("./math-utils.js");
var arr = [1, 2, 3, 4, 5];
console.log("|-5| = ", (0, _mathUtils.absolute)(-5));
console.log("5! = ", (0, _mathUtils.factorial)(5));
console.log("The GCD of 12 and 18 is", (0, _mathUtils.gcd)(12, 18));
console.log("The LCM of 12 and 18 is", (0, _mathUtils.lcm)(12, 18));
console.log("The average of", arr, "is", (0, _mathUtils.average)(arr));