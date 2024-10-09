import Local from '../base/local.js'

export default class Session extends Local {
  constructor () {
    super()
    this.storage = sessionStorage
  }
}
