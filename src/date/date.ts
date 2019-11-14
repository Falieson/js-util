import { ms } from '@falieson/js-second'

export function dateDaysAgo(days = 1): Date {
  return new Date(new Date().getTime() - days * ms.day)
}

export const dateOffsetBy = ({
  days = 1, // daysBefore
  hours = 0, // hoursBefore
  minutes = 0, // minutesBefore
  seconds = 0, // secondsBefore
  milliseconds = 0 // msBefore
} = {}): Date =>
  new Date(dateDaysAgo(days).setHours(hours, minutes, seconds, milliseconds))
