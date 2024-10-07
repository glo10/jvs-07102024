import { minus } from './functions/minus.mjs'
import { division } from './functions/divide.mjs'
import Multiplication from './functions/multiply.mjs'

// Exécution
console.log('soustraction', minus(10,5))
console.log('division', division(15,7))
const m = new Multiplication()
console.log('multiplication', m.operation(36, 4))
