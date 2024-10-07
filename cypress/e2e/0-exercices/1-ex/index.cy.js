import {
  emailElt,
  pwdElt,
  sbmtElt,
  helpEmailMsg,
  helpPwdMsg,
  emailVal,
  pwdVal,
  alertDangerClass
} from '../provider/sign-in-data'
describe('Exercise 1 testing', () => {
  beforeEach(() => {
    cy.visit('/1-ex/correction/src/html')
  })

  describe('Focus and blur events testing', () => {
    it('Should show help message for email', () => {
      cy.get(emailElt)
        .focus()
        .should(($input) => {
          expect($input.prev().text()).equal(helpEmailMsg)
        })
    })

    it('Should show password help message', () => {
      cy.get(pwdElt)
        .focus()
        .should(($input) => {
          expect($input.prev().text()).equal(helpPwdMsg)
        })
    })

    it('should remove e-mail help message', () => {
      cy.get(emailElt)
        .focus()
        .blur()
      cy.get(pwdElt, { timeout: 1 * 1000 }).should(($el) => {
        expect($el[0].previousElementSibling.innerHTML).contains('')
      })
    })

    it('should remove password help message', () => {
      cy.get(pwdElt)
        .focus()
        .blur()
      cy.get(pwdElt, { timeout: 1 * 1000 }).should(($el) => {
        expect($el[0].previousElementSibling.innerHTML).contains('')
      })
    })
  })

  describe('Submit event testing', () => {
    it('Should show danger message when emailElt is empty', () => {
      cy.get(pwdElt).type(pwdVal)
      cy.get(sbmtElt)
        .click({ force: true })
      cy.get(alertDangerClass).should($elt => {
        expect($elt.html()).equal(helpEmailMsg)
      })
    })

    it('Should show danger message when password is empty', () => {
      cy.get(emailElt).type(emailVal)
      cy.get(sbmtElt)
        .click({ force: true })
      cy.get(alertDangerClass, { timeout: 1 * 1000 }).should($elt => {
        expect($elt.html()).equal(helpPwdMsg)
      })
    })

    it('should remove error message', () => {
      cy.get(sbmtElt).click({ force: true })
      cy.get(alertDangerClass).should('exist')
      cy.get(emailElt).type(emailVal)
      cy.get(pwdElt).type(pwdVal)
      cy.get(sbmtElt).click({ force: true })
      cy.get(alertDangerClass, { timeout: 1 * 1000 }).should('not.exist')
    })
  })
})
