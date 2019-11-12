export function dateDaysAgo(days = 1) {
  const date = new Date()
  const oneDay = 24 * 60 * 60 * 1000

  return  new Date(date.getTime() - (days * oneDay))
}

export const dateOffsetBy = ({
  days=1, // daysBefore
  hours=0, // daysBefore=1, hoursOffset= 0, minutesOffset= 0
  minutes=0, // daysBefore=1, hoursOffset= 0, minutesOffset= 0
} = {}) => dateDaysAgo(days).setHours(hours, minutes, 0)
