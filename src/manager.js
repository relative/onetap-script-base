import debug from './debug'

export default class Manager {
  constructor() {
    globalThis['mgrFeatures'] = []
    globalThis['mgr'] = this
  }
  get features() {
    return globalThis['mgrFeatures']
  }
  set features(val) {
    if (!Array.isArray(val)) throw new TypeError('"features" is not an Array')
    globalThis['mgrFeatures'] = val
  }

  registerFeature(feat) {
    let newLength = this.features.push(feat),
      index = newLength - 1
    debug.print('Registered feature %s with index %i', feat.name, index)
    feat.managerInit(this, index)

    return index
  }

  load() {}
}
