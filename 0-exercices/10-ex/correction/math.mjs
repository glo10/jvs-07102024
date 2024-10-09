export function sum (nb1, nb2) {
  return `Addition : ${nb1} + ${nb2} = ${nb1 + nb2}`
}

export function minus (nb1, nb2) {
  return `Soustraction : ${nb1} - ${nb2} = ${nb1 - nb2}`
}

export function multiply (nb1, nb2) {
  return `Multiplication : ${nb1} x ${nb2} = ${nb1 * nb2}`
}

export function divide (nb1, nb2) {
  return (nb2 !== 0) ? `Division de ${nb1} / ${nb2} = ${nb1 / nb2}` : 'Division par 0 impossible'
}
