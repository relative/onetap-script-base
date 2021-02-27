import { escapeString, escapeRegex } from './util'

export default class ZUISubtab {
  constructor(parent, name, header) {
    this.elements = []
    this.parent = parent
    this.name = name
    this.header = header

    this.filtering = false
    this.filteredElements = []
  }
  get path() {
    return [this.parent, 'SUBTAB_MGR', this.name]
  }
  get fullPath() {
    return this.path.concat(this.name)
  }
  addElement(element) {
    this.elements.push(element)
    return element
  }

  renderSearch() {
    let searchPath = this.path.concat(this.name)
    UI.AddTextbox(searchPath, 'Search')
    UI.AddSliderInt(this.fullPath, this.header, 0, 0)
    let fnName = 'zuisubtab_' + this.name

    let cbP = searchPath.concat('Search').map((i) => {
      return `"${escapeString(i)}"`
    })

    // please onetap
    // stop using strings for function references
    // prettier-ignore
    let fn = eval('(function(){return function(){return globalThis["' + fnName + '"](UI.GetString([' + cbP.join(',') + ']));}})();')

    globalThis[fnName] = function (filterStr) {
      if (filterStr === '') return this.rerender(false, [])
      this.filtering = true
      this.rerender(
        true,
        this.elements.filter((el) => {
          return el.name.match(new RegExp(escapeRegex(filterStr), 'gi'))
        })
      )
    }.bind(this)
    globalThis[fnName + '_cb'] = fn
    UI.RegisterCallback(searchPath.concat('Search'), fnName + '_cb')
  }
  rerender(newFiltering, newElements) {
    if (!newFiltering && this.filtering) {
      this.filtering = false
      // get elements to re-enable
      for (let elidx in this.elements) {
        let el = this.elements[elidx]
        UI.SetEnabled(el.fullPath, 1)
      }
      this.filteredElements = []
      return
    }
    let toHide = this.elements.filter((i) => {
      return newElements.filter((x) => x.name === i.name).length == 0
    })

    for (let elidx in toHide) {
      let el = toHide[elidx]
      UI.SetEnabled(el.fullPath, 0)
    }
    for (let elidx in newElements) {
      let el = newElements[elidx]
      UI.SetEnabled(el.fullPath, 1)
    }

    this.filtering = true
    this.filteredElements = newElements
  }

  render() {
    this.renderSearch()
    for (let idx in this.elements) {
      let element = this.elements[idx]
      element.render()
    }
  }
}
