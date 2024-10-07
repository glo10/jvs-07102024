Object.defineProperty(String.prototype, 'length', {
  get: function () {
    return {
      originLength: this.toString().length,
      myLength: Math.floor(Math.random() * 1000),
    }
  }
})

console.log('autrefois il était possible de le faire', "Hello world".length)
