import ZUI from '../zui'
import { ZUIHotkey, ZUISliderInt, ZUICheckbox } from '../zui/elements'
import { SCRIPT_NAME } from '../Constants'

const ui = new ZUI(SCRIPT_NAME)
const st = ui.addSubtab('Config', SCRIPT_NAME, SCRIPT_NAME)

const HK_VIS_EXAMPLE = new ZUIHotkey('Example hotkey')
const CHK_VIS_WATERMARK = new ZUICheckbox(st, 'Watermark')

const elements = {
  visuals: {
    example: HK_VIS_EXAMPLE,
    watermark: CHK_VIS_WATERMARK,
  },
}

function setupMenu() {
  st.addElement(CHK_VIS_WATERMARK)

  ui.addHotkey(HK_VIS_EXAMPLE)
  ui.render()
}

export { setupMenu, ui, elements }
