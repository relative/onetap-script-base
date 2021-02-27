import printf from 'printf'

const colors = {
  '&f': '',
  '&g': '',
  '&b': '\x03',
  '&db': '',
  '&dr': '',
  '&gd': '',
  '&gray': '',
  '&lg': '',
  '&lr': '',
  '&lm': '',
  '&o': '',
  '&y': '	',
  '&pr': '',
}

export default {
  printChat(fmt, ...args) {
    Object.keys(colors).forEach((clrKey) => {
      fmt = fmt.replace(new RegExp(clrKey, 'gi'), colors[clrKey])
    })
    Cheat.PrintChat(' ' + printf(fmt, ...args))
  },
}
