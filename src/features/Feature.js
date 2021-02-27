import { randomIdentifier } from '../util/Random'

export default class Feature {
  constructor(name) {
    this.name = name
    this.id = randomIdentifier()
    this.callbacks = []
  }

  managerInit(manager, index) {
    this.index = index
    this.manager = manager
    this.callbacks.forEach(([event, member]) => {
      let randomName = randomIdentifier('stcb')
      globalThis[randomName] = eval(`
        (function() {
          return function() {
            return globalThis['mgrFeatures'][${index}]['${member.name}']()
          }
        })();
      `)
      Cheat.RegisterCallback(event, randomName)
    })
  }

  registerCallback(event, member) {
    this.callbacks.push([event, member])
    /*let randomName = 'stcb' + Math.random().toString(16).slice(2)
    globalThis[`${randomName}_fn`] = member.bind(this)
    globalThis[randomName] = eval(`
      (function() {
        return function() {
          //return globalThis['${randomName}_fn']()
        }
      })();
    `)
    Cheat.RegisterCallback(event, randomName)*/
  }
}
