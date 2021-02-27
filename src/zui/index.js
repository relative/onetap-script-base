import ZUISubtab from './Subtab'

export default class ZUI {
  constructor(name) {
    this.subtabs = []
    this.hotkeys = []
    this.rendered = false
  }

  addSubtab(parent, name, header) {
    var subtab = new ZUISubtab(parent, name, header)
    this.subtabs.push(subtab)
    return subtab
  }
  addHotkey(hotkey) {
    this.hotkeys.push(hotkey)
    return hotkey
  }

  render() {
    for (var idx in this.subtabs) {
      var subtab = this.subtabs[idx]
      UI.AddSubTab(subtab.path.slice(0, -1), subtab.path.pop())
      subtab.render()
    }

    for (var idx in this.hotkeys) {
      var hk = this.hotkeys[idx]
      hk.render()
    }
    this.rendered = true
  }
}
