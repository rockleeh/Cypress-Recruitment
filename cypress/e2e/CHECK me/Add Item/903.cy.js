//OK !
/// <reference types="cypress" />

describe('903', function () {
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


  it('CHKME-280: Vérification de l"application des standards GS1/Saisie manuelle', function () {
    cy.wait(1500)
    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()
    cy.wait(1500)
    cy.get(':nth-child(2)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.wait(1500)
    cy.get('.select2-results__option--highlighted').click()
    cy.wait(1500)
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('(01)35975600618641119091321ITEMTEST110')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0035975600618641119091321ITEMTEST111')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)03597560061864111909121ITEMTEST112')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)035975600618641119211321ITEMTEST113')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-item-3597560061864-ITEMTEST113 > .card').should('be.visible')
    cy.get('.text-muted').contains('2020-09-13')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0359756006186410ITEMTEST114(11)19091321ITEMTEST114(94)SKUVALUE')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-item-3597560061864-ITEMTEST114 > .card').should('be.visible')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0359756006186410ITEMTEST115(94)SKUVALUE(11)19091321ITEMTEST115')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-item-3597560061864-ITEMTEST115 > .card').should('be.visible')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0359756006186410ITEMTEST116(XX)19091321ITEMTEST116(94)SKUVALUE')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMX(94)SKUVALUE')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST10XXXXXXXXXXX(94)SKUVALUE')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST117')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-item-3597560061864-ITEMTEST117 > .card').should('be.visible')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST10XXXXXXXXXXX(94)SKUVALUE')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#add-on-scan-format-error').should('be.visible').contains('Désolé, Le format')


  })

  
})