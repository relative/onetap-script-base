import printf from 'printf'

function printTimestamp() {
  Cheat.PrintColor(
    [251, 170, 251, 255],
    `[${Globals.Realtime().toFixed(4).toString()}] `
  )
}

export default {
  clear() {
    Cheat.ExecuteCommand('clear')
  },
  print(fmt, ...args) {
    if (fmt.lastIndexOf('\n') !== fmt.length - 1) fmt = fmt + '\n'
    Cheat.PrintColor([251, 170, 251, 255], '[debug] ')
    printTimestamp()
    Cheat.Print(printf(fmt, ...args))
  },
  event(fmt, ...args) {
    if (fmt.lastIndexOf('\n') !== fmt.length - 1) fmt = fmt + '\n'
    Cheat.PrintColor([251, 170, 251, 255], '[debug] ')
    printTimestamp()
    Cheat.PrintColor([185, 128, 239, 255], '=> ')
    Cheat.Print(printf(fmt, ...args))
  },
}
