export function dashToSpaceUppercase(str: string): string {
  /* eslint-disable no-empty-pattern */
  return str
    .replace(/-{1,}/g, ' ')
    .replace(/(\s{1,}|\b)(\w)/g, function({}, space, letter): string {
      return space + letter.toUpperCase()
    })
  /* eslint-enable no-empty-pattern */
}

export function pluralize(str: string, amount: number): string {
  return amount > 1 ? `${str}s` : str
}

export function unixString(str: string): string {
  return str
    .split(' ')
    .join('_')
    .toLowerCase()
}

export function uuid(): string {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  return `${1e7}${-1e3}${-4e3}${-8e3}${-1e11}`.replace(
    /[018]/g,
    (c: any): string =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
  )
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

export function suuid(): string {
  return uuid().substr(0, 8)
}

export function uppercaseFirstLetter(str: string): string {
  return typeof str === 'string'
    ? str.charAt(0).toUpperCase() + str.slice(1)
    : ''
}

export function underscoreToSpaceUppercase(str: string): string {
  /* eslint-disable no-empty-pattern */
  return str
    .replace(/_{1,}/g, ' ')
    .replace(/(\s{1,}|\b)(\w)/g, function({}, space, letter): string {
      return space + letter.toUpperCase()
    })
  /* eslint-enable no-empty-pattern */
}
