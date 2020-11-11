import Lightning from 'wpe-lightning'

export default class Home extends Lightning.Component {
  static _template() {
    return {}
  }

  _handleLeft() {
    this.fireAncestors('$openMenu')
  }

  _init() {
    console.log('init')
  }
}
