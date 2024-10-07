class DocumentExtends extends Document {
    querySelectorCustom(selector) {
        console.log('Un nouveau querySelector', selector)
        return this.querySelector(selector)
    }
}

// Exécution
const el = new DocumentExtends()
console.log(el.querySelectorCustom('h1'))
