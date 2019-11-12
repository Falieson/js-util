
import {percent} from '../math'

export default function percentComplete(found: number, total: number, precision = 0) {
  return String(percent(found, total, precision)).padStart(precision > 0 ? 3 + precision : 2, '0')
}
