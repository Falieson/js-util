// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function times(n: number, func: (...args: any[]) => any): any {
  return Array.from(Array(n)).map(func)
}
