export default function leveledConsole(
  message: string,
  level = 'Info',
  ...rest: any[] // eslint-disable-line @typescript-eslint/no-explicit-any
): void {
  // eslint-disable-next-line no-console
  return console.log([`[${level}] ${message}`, ...rest])
}
