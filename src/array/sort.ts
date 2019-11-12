// tslint:disable no-any
export function sortByKey(target: Record<string, any>[] = [], key: string, descending: boolean = true) {
  return target.sort((a, b) => {
    const _a = key.split('.').reduce((x, y) => x && x[y], a)
    const _b = key.split('.').reduce((x, y) => x && x[y], b)

    if (descending) {
      if (_a < _b) return -1
      if (_a > _b) return 1
    }

    if (_a > _b) return -1
    if (_a < _b) return 1
    return 0
  })
}


export function sortObjectArray(data: Record<string, any>[] = [], key: string, descending = false) {
  return data.sort((a, b) => !descending
    ? a[key] - b[key]
    : b[key] - a[key]
  );
}
