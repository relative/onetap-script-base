import { devUsers, stableUsers } from './util/Whitelist'

export const SCRIPT_NAME = 'Script'

export default {
  SCRIPT_NAME: SCRIPT_NAME,
  BRANCH: (() => {
    let username = Cheat.GetUsername()
    if (devUsers.includes(username)) return 'dev'
    if (stableUsers.includes(username)) return 'stable'
    return '?'
  })(),

  Fonts: {
    setup: false,
    watermarkFont: ['Verdana.ttf', 14, true],
    pixelFont: ['consolab.ttf', 12, true],
    windowTitleFont: ['segoeui.ttf', 16, true],
  },
}
