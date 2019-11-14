export default class Counter {
  public constructor({ start = 0 } = {}) {
    const fn = function(n: number): () => number {
      return function(): number {
        n += 1
        return n
      }
    }
    return fn(start)
  }
}

// export class Counter2 {
//   public value = 0
//   increment = () => this.value += 1
// }
