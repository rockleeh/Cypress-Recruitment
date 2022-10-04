//OK !
/// <reference types="cypress" />

describe('890', function () {
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

    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click()
  })

  afterEach(() => {
    cy.viewport(1500, 720);
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    //logout
    cy.get('.p-0.btn > .fa').click()
    cy.get('.widget-content-right > .btn-pill').click()

    cy.get('#loginForm > .btn').should('be.visible')
  })



  it('CHKME-273: Affichage des GTIN dans la liste des choix des références', function () {

    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()

    cy.get(':nth-child(2)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()

    cy.get('.select2-results__option--highlighted').click()

    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('ITEMTEST95')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#item-details-card > .card-header').should('be.visible')
    cy.get('#barcode-camera-input').should('have.value', 'ITEMTEST95')
    cy.get('.position-relative > .select2-container > .selection > .select2-selection').should('have.length', 1) 

  })

  
})