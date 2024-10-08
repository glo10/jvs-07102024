describe('Exercise 4 testing', () => {
  describe('Testing navigation between sign in and sign up pages', () => {
    it('Should change form from sign-in to sign-up', () => {
      cy.visit('/4-ex/correction/src/html')
      cy.get('a.btn-info').click({ force: true })
      cy.get('h1').should($el => {
        expect($el.text()).equal('Inscription')
      })
      cy.get('input, select').should($fields => {
        expect($fields.length).equal(10) // included buttons and hidden
      })
    })
    it('Should change form from sign-up to sign-in', () => {
      cy.visit('/4-ex/correction/src/html/sign-up.html')
      cy.wait(1000)
      cy.get('a.btn-info').click({ force: true })
      cy.get('h1').should($el => {
        expect($el.text()).equal('Connexion')
      })
      cy.get('input, select').should($fields => {
        expect($fields.length).equal(3) // included buttons
      })
    })
  })

  describe('Countries and cities testing', () => {
    beforeEach(() => {
      cy.visit('/4-ex/correction/src/html/sign-up.html')
    })

    it('Should have countries on load', () => {
      cy.get('select[name=country] option').should($el => {
        // 250 countries plus placeholder
        expect($el.length).equal(251)
      })
    })

    it('Should have cities when country have been selected', () => {
      cy.get('select[name=country]').select('France')
      cy.get('select[name=city] option[value="Paris"]').should($el => {
        expect($el.data('latitude')).contains(48.85340000)
        expect($el.data('longitude')).contains(2.34860000)
      })
    })
  })
})
