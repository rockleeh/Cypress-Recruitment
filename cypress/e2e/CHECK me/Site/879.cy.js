/// <reference types="cypress" />

describe('879', function () {
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

  it('CHKME-266', function () {
    cy.wait(1500)
    cy.get(':nth-child(11) > :nth-child(6) > a').click()
    cy.wait(1500)

    cy.get('#create-park').should('be.visible')
    cy.get('#create-park').click()
    cy.wait(1500)
    cy.get('.card-header').should('be.visible')
    cy.get('#catu_parkbundle_park_name').type('site-test-0056').wait(1000) //++
    cy.get('#btn-create').click().wait(1000)
    cy.get('.alert').should('be.visible').contains('Succès ! Site créé avec succès')
    cy.log("OK")
  })

  

})