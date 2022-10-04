/// <reference types="cypress" />

describe('822', function () {
  const username = 'Admin'
  const password = 'CATUelec92220!'
  const site = 'http://mycatutrack.catudev.com/fr/'
  var x = 0
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

  
  // afterEach(() => {
  //   cy.viewport(1500, 720);
  //   cy.on('uncaught:exception', (err, runnable) => {
  //     return false
  //   });
  //   //logout
  //   cy.get('.p-0.btn > .fa').click()
  //   cy.get('.widget-content-right > .btn-pill').click()
  //   cy.wait(2000)
  //   cy.get('#loginForm > .btn').should('be.visible')
  // })

  
  it('CHKME-251: Calcule de conformité pour un article en fin de vie', function () {
    cy.wait(500)
    cy.get(':nth-child(11) > :nth-child(1) > a').click()
    cy.wait(500)

    cy.get('.page-title-subheading').should('be.visible').contains('Liste des articles')
    cy.wait(5500)
    cy.get('a:contains("M0")').first().click()
    cy.wait(500)
    cy.get(':nth-child(2) > .row > :nth-child(1) > .main-card > .card-header').should('be.visible')
    cy.get('[href="#itemHistory"] > .nav-link-icon').click()
    cy.get('#item-history > .col-md-12 > .main-card > .card-header > .btn-actions-pane-right > .btn > .fa').click()
    cy.wait(500)
    cy.get('#item-last-check-date').clear().wait(3500)
    cy.get('#item-last-check-date').type("30/12/2022").wait(3500)
    cy.get('#item-status-select').select(5).wait(3500)
    cy.get('#item-update-status-button').click()
    cy.wait(500)
    cy.get('#modal-confirm').click()
    cy.get('[href="#home"] > .nav-link-icon').click()
    cy.get(':nth-child(2) > .row > :nth-child(1) > .main-card > .card-header > .btn-actions-pane-right')
 
  })

  // it('CHKME-276', function () {


    
  // })

  

})