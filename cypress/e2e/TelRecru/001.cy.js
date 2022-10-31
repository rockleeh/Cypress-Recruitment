//OK !
/// <reference types="cypress" />

describe('001', function () {
  const username = 'ha.ga'
  const password = '15429099'
  const site = 'http://192.168.17.110:4200/'
  const dep = 'deptest'

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
    cy.get('.login-title').should('be.visible')
    cy.get('#mat-input-0').type(username)
    cy.get('#mat-input-1').type(password)
    cy.get('.mat-focus-indicator').click()
    cy.get('p').should('be.visible').contains('Acceuil')
    cy.wait(1000)
  })

  afterEach(() => {
    cy.viewport(1500, 720);
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    //logout
    cy.get('.user_profile > .dropdown-toggle > span').click()
    cy.get('.user_dw_menu > :nth-child(4) > a').click()
    cy.get('.login-title').should('be.visible')
  })


  it('TR-001-1: ajout dep', function () {

    cy.get(':nth-child(5) > .menu-top > .hide-menu').click().wait(500)
    cy.get('[style="font-size: 20px;"]').should('be.visible').contains("Gestion du compte d'entreprise")
    cy.get(':nth-child(2) > .mat-button-wrapper').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > h2').should('be.visible').contains("Departments")
    cy.get(':nth-child(1) > .materialTableHeader > .header-buttons-left > :nth-child(2) > .mat-tooltip-trigger > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-4').type(dep)
    cy.get('.mat-raised-button > .mat-button-wrapper').click()
    cy.get('.mat-snack-bar-container').should('be.visible').contains('Added Record Successfully...!!!')
    cy.get(':nth-child(2) > .mat-button-wrapper').click()
    cy.get(':nth-child(1) > .materialTableHeader > .header-buttons-left > :nth-child(1) > .browser-default').type(dep)
    cy.get('.col-md-7 > :nth-child(2) > :nth-child(2) > :nth-child(1)').contains(dep)

  })

  it('TR-001-2: ajout exist dep', function () {

    cy.get(':nth-child(5) > .menu-top > .hide-menu').click().wait(500)
    cy.get('[style="font-size: 20px;"]').should('be.visible').contains("Gestion du compte d'entreprise")
    cy.get(':nth-child(2) > .mat-button-wrapper').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > h2').should('be.visible').contains("Departments")
    cy.get(':nth-child(1) > .materialTableHeader > .header-buttons-left > :nth-child(2) > .mat-tooltip-trigger > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click()
    cy.get('#mat-input-4').type(dep)
    cy.get('.mat-raised-button > .mat-button-wrapper').click()
    cy.get('.mat-button > .mat-button-wrapper').click()
    cy.get('.mat-snack-bar-container').should('be.visible').contains('Already exist ...!!!') 

  })

   it('TR-001-3: supp dep', function () {

    cy.get(':nth-child(5) > .menu-top > .hide-menu').click().wait(500)
    cy.get('[style="font-size: 20px;"]').should('be.visible').contains("Gestion du compte d'entreprise") 
    cy.get(':nth-child(2) > .mat-button-wrapper').click()
    cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > h2').should('be.visible').contains("Departments")
    cy.get(':nth-child(1) > .materialTableHeader > .header-buttons-left > :nth-child(1) > .browser-default').type(dep)
    cy.get(':nth-child(1) > div.ng-star-inserted > .row > .col-xl-1 > .mat-focus-indicator > .mat-button-wrapper > .mat-icon').click().wait(1000)

   })
  
})