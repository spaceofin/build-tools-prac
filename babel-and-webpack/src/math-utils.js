export function absolute(n) {
  return n < 0 ? -n : n;
}

export function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

export function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

export function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

export function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return undefined;

  const sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}
