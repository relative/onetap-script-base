import Constants from './Constants'
import debug from './debug'

globalThis['consts'] = Constants
globalThis['debug'] = debug
globalThis['ensureFonts'] = function ensureFonts() {
  if (globalThis['consts'].Fonts.setup) return
  globalThis['debug'].event('Font setup begin')
  Object.keys(globalThis['consts'].Fonts).forEach((key) => {
    let val = globalThis['consts'].Fonts[key]
    if (!Array.isArray(val)) return
    globalThis['debug'].print('Created font %s (%ipt)', val[0], val[1])
    globalThis['consts'].Fonts[key] = Render.GetFont.apply(null, val)
  })
  globalThis['consts'].Fonts.setup = true
  globalThis['debug'].event('Font setup complete')
}

Cheat.RegisterCallback('Draw', 'ensureFonts')
