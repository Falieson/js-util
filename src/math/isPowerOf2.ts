// https://stackoverflow.com/a/42799320
export default function isPowerOf2(n: number): boolean {
  return Math.clz32(n) < Math.clz32(n - 1)
}
