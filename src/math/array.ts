export function averageArr(arr: number[]) {
  if (arr === undefined) throw Error('averageArr(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr)) throw Error('averageArr() must be an array, not: ' + typeof(arr))

  return arr.reduce((p, c) => p + c, 0) / arr.length
}

export function sumArr(arr: number[]) {
  if (arr === undefined) throw Error('sumArray(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr)) throw Error('sumArray() must be an array, not: ' + typeof(arr))

  return arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
  }, 0)
}

// TODO: swap out key for optional accessor function
export function sumObjectArr(arr: Record<string, any>[]  = [], key = "") {
  return arr.reduce((prev, curr) => prev + curr[key], 0);
}
