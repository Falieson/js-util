export default function leveledConsole(message: string, level: string = 'Info') {
  const initialArgs = Array.prototype.slice.call(arguments, 2)
  return console.log.apply(console, [`[${level}] ${message}`, ...initialArgs])
}
