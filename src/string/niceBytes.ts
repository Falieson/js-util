export default function niceBytes(x: string): string {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

  let l = 0
  let n = parseInt(x, 10) || 0

  while (n >= 1024) {
    n = n / 1024
    l++
  }

  return `${n.toFixed(n >= 10 || l < 1 ? 0 : 1)} ${units[l]}`
}
