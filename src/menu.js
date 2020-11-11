import Lightning from 'wpe-lightning'
import MenuItem from './menuItem.js'

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      x: -540,
      y: 0,
      w: 540,
      h: 1080,
      alpha: 0,
      rect: true,
      color: 0xff000D55,
      flex: {
        direction: 'column',
        paddingTop: 50,
      },
    }
  }
  
  _init() {
    const items = [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4',
      'Option 5'
    ]
    
    this.children = items.map(text => {
      return {
        type: MenuItem,
        Label: {
          text: {
            text
          }
        }
      }
    })

    this.focusedItem = 0
  }

  _getFocused() {
    return this.children[this.focusedItem]
  }
  
  _handleDown() {
    if (this.focusedItem < this.children.length - 1) {
      this.focusedItem++
    }
  }
  
  _handleUp() {
    if (this.focusedItem > 0) {
      this.focusedItem--
    }
  }

  _handleEnter() {
    this.children.forEach((menuItem, i) => {
      if (i === this.focusedItem) {
        menuItem.fire('select')
      } else {
        menuItem.fire('unselect')
      }
    })
  }

  _handleRight() {
    this.close()
  }

  open() {
    this._setState('Opened')
  }

  close() {
    this._setState('')
    this.fireAncestors('$closeMenu')
  }

  static _states() {
    return [
      class Opened extends this {
        $enter() {
          this.patch({
            smooth: {
              x: 0,
              alpha: 1,
            },
          })
        }
        $exit() {
          this.patch({
            smooth: {
              x: -540,
              alpha: 0,
            },
          })
        }
      },
    ]
  }
}
