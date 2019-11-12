export const currMinute = () => new Date(Date.now()).setSeconds(0).valueOf()
export const currMinuteInUnix = () => currMinute() / 1000
export const currSecondInUnix = () => (Date.now() / 1000).toPrecision(0)
