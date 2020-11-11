import lng from 'wpe-lightning'

export default class MenuItem extends lng.Component {
  static _template() {
    return {
      x: 0,
      y: 0,
      w: 480,
      h: 50,
      rect: true,
      alpha: 0.8,
      color: 0xff000000,
      enableClipping: true,
      flexItem: { margin: 10 },
      Label: {
        x: 30,
        y: 25,
        w: 440,
        h: 50,
        mountY: 0.5,
        text: {
          color: 0xffffffff,
          fontSize: 32,
          verticalAlign: 'middle',
          text: '',
        },
      }
    }
  }
  
  _focus() {
    this.patch({ smooth: { alpha: 1, scale: 1.2, x: 30, w: 450, Label: { color: 0xffcccccc }}})
  }
  
  _unfocus() {
    this.patch({ smooth: { alpha: 0.8, scale: 1, x: 0, w: 480, Label: { color: 0xffffffff }}})
  }
  
  select() {
    this._setState('Selected')
  }
  
  unselect() {
    this._setState('')
  }
  
  static _states() {
    return [
      class Selected extends this {
        $enter() {
          this.patch({
            Label: {
              color: 0xff00b3ff,
            },
          })
        }
        $exit() {
          this.patch({
            Label: {
              color: 0xffffffff,
            },
          })
        }
      },
    ]
  }
}
