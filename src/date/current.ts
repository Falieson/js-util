export const currMinute = (): number =>
  new Date(Date.now()).setSeconds(0).valueOf()
export const currMinuteInUnix = (): number => currMinute() / 1000
export const currSecondInUnix = (): number =>
  parseInt((Date.now() / 1000).toPrecision(0), 10)
