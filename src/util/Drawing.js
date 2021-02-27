export default {
  ShadowString(x, y, centered, text, color, font) {
    Render.String(x + 1, y + 1, centered, text, [0, 0, 0, 180], font)
    Render.String(x, y, centered, text, color, font)
  },
}
