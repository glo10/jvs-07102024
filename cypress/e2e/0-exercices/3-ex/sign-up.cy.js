import { inputs, submitElt } from '../provider/sign-up-data'
import { alertDangerClass, emailVal, pwdVal, sbmtElt } from '../provider/sign-in-data'
const { lastname, firstname, email, password, age } = inputs
const fields = [lastname, firstname, email, password, age]
describe('Exercise 3 testing', () => {
  beforeEach(() => {
    cy.visit('/3-ex/correction/src/html/sign-up.html')
  })

  describe('Focus events testing with help messages', () => {
    fields.forEach((field) => {
      it(`Should show help message for ${field.elt}`, () => {
        cy.get(field.elt)
          .focus()
          .should(($input) => {
            expect($input.prev().text()).equal(field.helper)
          })
      })
    })
  })
  describe('Blur events testing lose help messages', () => {
    fields.forEach((field) => {
      it(`should remove help message for ${field.elt}`, () => {
        cy.get(field.elt)
          .focus()
          .blur()
        cy.get(field.elt, { timeout: 1 * 1000 }).should(($el) => {
          expect($el[0].previousElementSibling.innerHTML).contains('')
        })
      })
    })
  })

  describe('Submit event', () => {
    describe('use cases with alert message', () => {
      it('should have missing lastname alert', () => {
        cy.get(submitElt).click({ force: true })
        cy.get(alertDangerClass).should('have.text', lastname.helper)
      })
      it('should have missing firstname alert', () => {
        cy.get(lastname.elt).type('Tshimini')
        cy.get(submitElt).click({ force: true })
        cy.get(alertDangerClass).should('have.text', firstname.helper)
      })
      it('should have missing email alert', () => {
        cy.get(lastname.elt).type('Tshimini')
        cy.get(firstname.elt).type('Glodie')
        cy.get(submitElt).click({ force: true })
        cy.get(alertDangerClass).should('have.text', email.helper)
      })
      it('should have missing password alert', () => {
        cy.get(lastname.elt).type('Tshimini')
        cy.get(firstname.elt).type('Glodie')
        cy.get(email.elt).type(emailVal)
        cy.get(submitElt).click({ force: true })
        cy.get(alertDangerClass).should('have.text', password.helper)
      })
      it('should have missing age alert', () => {
        cy.get(lastname.elt).type('Tshimini')
        cy.get(firstname.elt).type('Glodie')
        cy.get(email.elt).type(emailVal)
        cy.get(password.elt).type(pwdVal)
        cy.get(submitElt).click({ force: true })
        cy.get(alertDangerClass).should('have.text', age.helper)
      })
    })
    describe('All fields are filled in', () => {
      it('should not have alert message', () => {
        cy.get(sbmtElt).click({ force: true })
        cy.get(alertDangerClass).should('exist')
        cy.get(lastname.elt).type('Tshimini')
        cy.get(firstname.elt).type('Glodie')
        cy.get(email.elt).type(emailVal)
        cy.get(password.elt).type(pwdVal)
        cy.get(age.elt).type(32)
        cy.get(sbmtElt).click({ force: true })
        cy.get(alertDangerClass, { timeout: 1 * 1000 }).should('not.exist')
      })
    })
  })
})
