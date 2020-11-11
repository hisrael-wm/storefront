import Lightning from 'wpe-lightning'
import Home from './home.js'
import Menu from './menu.js'

export default class MyApp extends Lightning.Application {
  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xffe5e5e5,
      },
      Home: {
        type: Home,
      },
      Menu: {
        type: Menu,
      },
    }
  }
  
  $openMenu() {
    this.menuIsOpen = true
    this.menu.fire('open')
  }
  
  $closeMenu() {
    this.menuIsOpen = false
  }
  
  _getFocused() {
    return this.menuIsOpen ? this.menu : this.home
  }
  
  _init() {
    this.menuIsOpen = false
    this.menu = this.tag('Menu')
    this.home = this.tag('Home')
  }
}