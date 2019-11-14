// Returns a random false or true
export function randomBoolean(): boolean {
  return Math.random() >= 0.5
}

// Returns a random integer between min (inclusive) and max (inclusive)
// Using Math.round() will give you a non-uniform distribution!
export function randomInt(min = 0, max: number = Infinity - 1): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Returns a random number between min (inclusive) and max (exclusive)
export function randomFloat(min = 0, max: number = Infinity - 1): number {
  return Math.random() * (max - min) + min
}
