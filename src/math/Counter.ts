export default class Counter {
  constructor({
    start = 0
  } = {}) {
    return (function(n) {
      return function() {
        n += 1
        return n
      }
    }(start))
  }
}

// export class Counter2 {
//   public value = 0
//   increment = () => this.value += 1
// }
