class SignIn {
  /**
   * Constructeur appelé lors de la création d'un objet à l'aide de l'opérateur new SignIn
   * @returns void
   */
  constructor () {
    this.inputs = [ // Nos inputs elements dans le DOM + message d'aide
      {
        selector: 'input[type=email]',
        msg: 'Veuillez saisir votre adresse e-mail !'
      },
      {
        selector: 'input[type=password]',
        msg: 'Veuillez saisir votre mot de passe !'
      }
    ]
    this.submit = 'input[type=submit]'
  }

  /**
   * Ajout des écouteurs des événements
   * @returns void
   */
  events () {
    this.onFocusShowHelpMessage()
    this.onBlurRemoveHelpMessage()
    this.onSubmitCheckEmptyFields()
  }

  /**
   * Gestion de l'événement focus
   * @returns void
   */
  onFocusShowHelpMessage () {
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      const inputEl = document.querySelector(this.inputs[i].selector)
      inputEl.addEventListener('focus', (e) => {
        e.target.parentElement.firstElementChild.innerHTML = this.inputs[i].msg
      })
    }
  }

  /**
   * Gestion de l'événement perte de focus (blur)
   * @returns void
   */
  onBlurRemoveHelpMessage () {
    const size = this.inputs.length
    for (let i = 0; i < size; i++) {
      const inputEl = document.querySelector(this.inputs[i].selector)
      inputEl.addEventListener('blur', (e) => {
        e.target.parentElement.firstElementChild.innerHTML = ''
      })
    }
  }

  /**
   * Gestion de l'événement submit
   * @returns void
   */
  onSubmitCheckEmptyFields () {
    const el = document.querySelector(this.submit)
    const elts = this.inputs
    el.addEventListener('click', function (e) {
      const size = elts.length
      e.preventDefault()
      for (let i = 0; i < size; i++) {
        var alertUser = el.parentElement.querySelector('.alert.alert-danger')
        var isEmpty = false
        const inputEl = document.querySelector(elts[i].selector)
        if (inputEl.value.length === 0) { // champ vide
          isEmpty = true
          if (alertUser === null) {
            const p = document.createElement('p')
            p.classList.add('alert', 'alert-danger', 'my-3', 'text-center')
            p.textContent = elts[i].msg
            el.insertAdjacentHTML('beforebegin', p.outerHTML)
          } else {
            el.parentElement.querySelector('p.alert-danger').innerHTML = elts[i].msg
          }
          break
        }
      }
      if (!isEmpty && alertUser) {
        alertUser.remove()
      }
    })
  }
}
// --- EXECUTION
// Lors du chargement de la page
window.onload = () => { // idem window.addEventListener('load', () => {})
  const signIn = new SignIn()
  signIn.events()
}
// Autre notation similaire à l'exécution précédente
// window.addEventListener('load', () => {
//   const signIn = new SignIn()
//   signIn.events()
// })
