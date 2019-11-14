export default function percent(
  found: number,
  total: number,
  precision = 0
): number {
  const res = ((found / total) * 100).toPrecision(precision)
  return parseFloat(res)
}
