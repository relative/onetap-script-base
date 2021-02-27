import ZUIElement from './Element'

export default class ZUICheckbox extends ZUIElement {
  constructor(parent, name) {
    super(parent, name)
  }

  render() {
    UI.AddCheckbox(this.path, this.name)
  }
}
