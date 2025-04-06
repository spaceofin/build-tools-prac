"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.absolute = absolute;
exports.average = average;
exports.factorial = factorial;
exports.gcd = gcd;
exports.lcm = lcm;
function absolute(n) {
  return n < 0 ? -n : n;
}
function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return a * b / gcd(a, b);
}
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;
  var sum = numbers.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  return sum / numbers.length;
}