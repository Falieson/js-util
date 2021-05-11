// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function loop(items: any[], process: (item: any) => any): any {
  // credit: Jeff Greenberg
  // this approach is the fastest for large arrays

  let iterations = items.length % 8,
    i = items.length - 1

  while (iterations) {
    process(items[i--])
    iterations--
  }

  iterations = Math.floor(items.length / 8)

  while (iterations) {
    process(items[i--])
    process(items[i--])
    process(items[i--])
    process(items[i--])
    process(items[i--])
    process(items[i--])
    process(items[i--])
    process(items[i--])
    iterations--
  }
}
