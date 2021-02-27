import '@babel/polyfill'

import { setupMenu } from './menu'
import Manager from './manager'
import debug from './debug'
import './fonts'

import FeatureWatermark from './features/Watermark'
import http from './http'

globalThis['http_idx'] = 0
globalThis['http'] = http
globalThis['http_cb'] = function http_cb() {
  globalThis['http_idx'] = globalThis['http_idx'] + 1
  if (globalThis['http_idx'] % 10 === 0) {
    globalThis['http_idx'] = 0
    globalThis['http'].checkBatch()
  }
}
Cheat.RegisterCallback('Draw', 'http_cb')
setupMenu()
debug.event('Script load')
const manager = new Manager()

manager.registerFeature(new FeatureWatermark())

manager.load()
