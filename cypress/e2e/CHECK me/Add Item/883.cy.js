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



  it('CHKME-273: Ajout via fichier', function () {

    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()
    cy.get('.page-title-heading').contains('Ajouter un article').should('be.visible')
    cy.get(':nth-child(3)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click().wait(1000)
    cy.get('#file-upload').attachFile("item-list-template.csv", { subjectType: 'drag-n-drop' });
    cy.get('#start-csv-import').click()
    cy.get('#scanned-items-count', { timeout: 30000 }).should('be.visible');
   
    cy.contains('ITEMTEST40').should('be.visible')
    cy.contains('G000DNKN').should('be.visible')
    cy.contains('ITEMTEST41').should('be.visible')
    cy.contains('ITEMTEST42').should('be.visible')
    cy.contains('ITEMTEST43').should('be.visible')
    
    cy.contains('ITEMTEST44').should('be.visible')
    //cy.contains('ITEMTEST45').should('be.visible')
    //cy.contains('ITEMTEST50').should('be.visible')
    cy.contains('ITEMTEST51').should('be.visible')
    cy.contains('ITEMTEST54').should('be.visible')
    cy.contains('ITEMTEST55').should('be.visible')
    //cy.contains('ITEMTEST56').should('be.visible')
    cy.contains('ITEMTEST59999999999').should('be.visible')

  })

  
})