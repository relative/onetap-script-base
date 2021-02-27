import Feature from './Feature'
import { elements } from '../menu'

import Constants from '../Constants'

export default class FeatureWatermark extends Feature {
  constructor() {
    super('Watermark')
    this.registerCallback('Draw', this.onDraw)
  }

  onDraw() {
    if (!elements.visuals.watermark.getValue()) return

    let str = `${Constants.SCRIPT_NAME} [${
      Constants.BRANCH
    }] | ${Cheat.GetUsername()} | ${Local.Latency() | 0}ms`
    let textSize = Render.TextSize(str, Constants.Fonts.watermarkFont)

    let [x] = Render.GetScreenSize()
    x = x - 25
    x = x - textSize[0]

    Render.FilledRect(x - 10, 10, textSize[0] + 20, textSize[1] + 8, [
      0,
      0,
      0,
      200,
    ])
    Render.GradientRect(
      x - 10,
      6,
      textSize[0] + 20,
      3,
      1,
      [100, 100, 255, 255],
      [100, 100, 255, 180]
    )
    Render.String(
      x,
      10,
      0,
      str,
      [255, 255, 255, 255],
      Constants.Fonts.watermarkFont
    )
  }
}
