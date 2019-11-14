export function averageArr(arr: number[]): number {
  if (arr === undefined)
    throw Error('averageArr(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr))
    throw Error(`averageArr() must be an array, not: ${typeof arr}`)

  return arr.reduce((p, c): number => p + c, 0) / arr.length
}

export function sumArr(arr: number[]): number {
  if (arr === undefined)
    throw Error('sumArray(arr): arr must be an array, not: undefined')
  if (!Array.isArray(arr))
    throw Error(`sumArray() must be an array, not: ${typeof arr}`)

  return arr.reduce(function(accumulator, currentValue): number {
    return accumulator + currentValue
  }, 0)
}

// TODO: swap out key for optional accessor function
export function sumObjectArr(
  arr: Record<string, any>[] = [], // eslint-disable-line @typescript-eslint/no-explicit-any
  key = ''
): number {
  return arr.reduce((prev, curr): number => prev + curr[key], 0)
}
