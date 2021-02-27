import ZUIElement from './Element'

export default class ZUISliderInt extends ZUIElement {
  constructor(parent, name, min, max) {
    super(parent, name)
    this.min = min
    this.max = max
  }

  render() {
    UI.AddSliderInt(this.path, this.name, this.min, this.max)
  }
}
