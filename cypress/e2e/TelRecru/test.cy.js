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

 

   it('TR-001-3: supp', function () {

    cy.get(':nth-child(5) > .menu-top > .hide-menu').click().wait(500)
    cy.get('[style="font-size: 20px;"]').should('be.visible').contains("Gestion du compte d'entreprise") 
    cy.get('.body > :nth-child(4)').click()

    cy.contains(new RegExp(dep, "g")).parent('div').within(() => {
    cy.get('div').contains('button', 'delete')
  
    })
})
  
})