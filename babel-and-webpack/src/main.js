import { absolute, factorial, gcd, lcm, average } from "./math-utils.js";

const arr = [1, 2, 3, 4, 5];

console.log("|-5| = ", absolute(-5));
console.log("5! = ", factorial(5));
console.log("The GCD of 12 and 18 is", gcd(12, 18));
console.log("The LCM of 12 and 18 is", lcm(12, 18));
console.log("The average of", arr, "is", average(arr));
