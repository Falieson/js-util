/* eslint-disable @typescript-eslint/no-explicit-any */
export function sortByKey(
  target: Record<string, any>[] = [],
  key: string,
  descending = true
): Record<string, any> {
  return target.sort((a, b): number => {
    const _a = key.split('.').reduce((x, y): any => x && x[y], a)
    const _b = key.split('.').reduce((x, y): any => x && x[y], b)

    if (descending) {
      if (_a < _b) return -1
      if (_a > _b) return 1
    }

    if (_a > _b) return -1
    if (_a < _b) return 1
    return 0
  })
}

export function sortObjectArray(
  data: Record<string, any>[] = [],
  key: string,
  descending = false
): Record<string, any> {
  return data.sort((a, b): number =>
    !descending ? a[key] - b[key] : b[key] - a[key]
  )
}
