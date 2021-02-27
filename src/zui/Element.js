export default class ZUIElement {
  constructor(parent, name) {
    this.parent = parent
    this.name = name

    this.elements = []
  }

  get path() {
    return this.parent.path.concat(this.parent.name)
  }

  get fullPath() {
    return this.parent.path.concat(this.parent.name, this.name)
  }

  render() {
    throw new Error('ZUIElement#render not implemented')
  }

  getValue() {
    return UI.GetValue(this.fullPath)
  }
}
