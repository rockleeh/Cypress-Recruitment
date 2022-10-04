//OK !
/// <reference types="cypress" />

describe('898', function () {
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

  it('CHKME-275: Carte d"article/désactivation de changement de site pour un admin CATU', function () {
    cy.get(':nth-child(11) > :nth-child(1) > a').click()
    cy.wait(7500)
    cy.get('.page-title-subheading').should('be.visible').contains('Liste des articles')
    cy.get('a:contains("G0")').first().click()
    cy.get(':nth-child(2) > .row > :nth-child(1) > .main-card > .card-header').should('be.visible')
    
    cy.get('#update-assignment').click()
    cy.get('.rm-list-borders > .list-group-item').should('be.visible')

    cy.get('#select-assignment').find('option:selected').should('have.text', "Sélectionnez l'attribution")
    cy.get('#select-assignment').select(1)
    cy.get('#select-assignment').find('option:selected').should('have.text', 'Equipe') 
    cy.get('#select-assignment').select(2)  
    cy.get('#select-assignment').find('option:selected').should('have.text', 'Groupe') 
    cy.get('#select-assignment').select(3) 
    cy.get('#select-assignment').find('option:selected').should('have.text', 'Utilisateur') 
    cy.get('#select-assignment').find('option').should('have.length', 4)
    cy.log('OK')


  })

  it('CHKME-276: Liste des articles/désactivation de changement de site pour un admin CATU', function () {
    cy.wait(1500)
    cy.get(':nth-child(11) > :nth-child(6) > a').click()
    cy.wait(1500)

    cy.get('#create-park').should('be.visible')
    cy.get('#create-park').click()
    cy.wait(1500)
    cy.get('.card-header').should('be.visible')
    cy.get('#catu_parkbundle_park_name').type('site-test-0053').wait(1000) //++
    cy.get('#btn-create').click().wait(1000)
    cy.get('.alert').should('be.visible').contains('Succès ! Site créé avec succès')
    cy.log('OK')
  })

  

})