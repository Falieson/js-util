// tslint:disable
export default function percent(found: number, total: number, precision = 0) {
  return ((found / total) * 100).toPrecision(precision)
}
