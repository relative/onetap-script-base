import { SCRIPT_NAME } from '../Constants'

export default class ZUIHotkey {
  constructor(name, shortname, hidden) {
    this.name = `[${SCRIPT_NAME}] ` + name
    this.shortname = `[${SCRIPT_NAME}] ` + (shortname || name)
    if (typeof hidden === 'boolean' && !hidden) this.shortname = ''
  }

  get path() {
    return ['Config', 'Scripts', 'SHEET_MGR', 'JS Keybinds']
  }
  get fullPath() {
    return this.path.concat(this.name)
  }

  render() {
    UI.AddHotkey(this.path, this.name, this.shortname)
  }

  active() {
    return UI.GetValue(this.fullPath)
  }
}
