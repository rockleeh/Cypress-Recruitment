//OK !
/// <reference types="cypress" />

describe('902', function () {
  const username = 'Admin'
  const password = 'CATUelec92220!'
  const site = 'http://mycatutrack.catudev.com/fr/'
  beforeEach(() => {
    cy.viewport(1500, 720);
    cy.visit({
      url: site,
      method: 'GET',
    })
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    //login
    cy.wait(1500)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click().wait(1500)
  })

  

  afterEach(() => {
    cy.viewport(1500, 720);
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    //logout
    cy.get('.p-0.btn > .fa').click()
    cy.get('.widget-content-right > .btn-pill').click()
    cy.wait(2000)
    cy.get('#loginForm > .btn').should('be.visible')
  })

  
  it('CHKME-277: vérification de la désactivation du champ GTIN dans le formulaire d"ajout ', function () {
    cy.wait(1500)
    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(1500)
    cy.get('.page-title-heading > :nth-child(2)').should('be.visible').contains('Réference articles')
    cy.wait(1500)
    cy.get('#addReference').click()
    cy.wait(1500)
    cy.get('#gtin-code').should('be.disabled')
    cy.log("OK")
  })

  it('CHKME-278: vérification de la désactivation du champ GTIN dans le formulaire de modification', function () {
    cy.wait(1500)
    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(2000)
    cy.get('.page-title-heading > :nth-child(2)').should('be.visible').contains('Réference articles')
    cy.wait(1500)
    cy.get('[data-reference-id="100"] > .more-details > .hamburger').click()
    cy.wait(1500)
    cy.get('.action-cell > .mr-0').should('be.visible')
    cy.get('.action-cell > .mr-0').click()
    cy.wait(1500)
    cy.get('#gtin-code').should('be.disabled')
    cy.log("OK")
    
  })

  

})