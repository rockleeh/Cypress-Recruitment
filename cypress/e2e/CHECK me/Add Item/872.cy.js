//OK !
/// <reference types="cypress" />

describe('872', function () {
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
    cy.get('.widget-content-right > .btn-pill').click().wait(500)

    cy.get('#loginForm > .btn').should('be.visible')
  })

  it('CHKME-239: Saisie manuelle/lecture d"un format GS1 HRI', function () {

    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    //cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()  menu gauche
    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()

    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()

    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST014').wait(1000) //++
    cy.get('#manual-reference-add > .fas').click().wait(1000)
    cy.get('#scanned-items-count').should('be.visible')
    cy.get('.sw-btn-next').click().wait(1000)
    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('.assignee-label').should('be.visible')
    cy.get('.card > .widget-content-left > .custom-checkbox').click().wait(2000)
    cy.get('#apply-assignment > .ladda-label').click()
    cy.get('.sw-btn-next').click()
    cy.get('#step-5 > .no-results > .results-title').should('be.visible')
    // cy.get('#add-recognized-items').click()
    // cy.get('#restart-scan').should('be.visible')
  })

  it('CHKME-240: Saisie manuelle/lecture d"un format GS1 gant HRI', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()

     cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
     cy.get('.select2-results__option--highlighted').click()
     cy.get('.sw-btn-next').click()

    cy.get('#manual-reference-input').type('(01)0359756005578821GANTTEST05(95)0001') //++
    cy.wait(2000)
    cy.get('#manual-reference-add > .fas').click()
    cy.wait(1000) 
    cy.get('#barcode-camera-input').should('have.value', '/GANTTEST05')
    cy.get('.position-relative > .select2-container > .selection > .select2-selection').should('be.visible')

    cy.get('#apply-informations').click()
    cy.wait(2000)
    cy.get('#scanned-items-count').should('be.visible')
    cy.get('.sw-btn-next').click().wait(1000)

    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('.assignee-label').should('be.visible')
    cy.get('.card > .widget-content-left > .custom-checkbox').click().wait(1000)
    cy.get('#apply-assignment > .ladda-label').click().wait(1000)
    cy.get('.sw-btn-next').click()
    cy.get('#step-5 > .no-results > .results-title').should('be.visible')
    //cy.get('#add-recognized-items').click()
    //cy.get('#restart-scan').should('be.visible')
  })

  it('CHKME-241: Saisie manuellee/lecture d"un format S/N gant', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('/GANTTEST06')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#barcode-camera-input').should('have.value', '/GANTTEST06')
    cy.get('#select2-select2-checkme-references-container').click().wait(1000)
    cy.get('.select2-results__option--highlighted').click()
    cy.get('#apply-informations').click()
    cy.get('#scanned-items-count').should('be.visible')
    cy.get('.sw-btn-next').click().wait(1500)
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('.card > .widget-content-left > .custom-checkbox').click().wait(3000)
    cy.get('#apply-assignment > .ladda-label').click()
    cy.get('.sw-btn-next').click()
    //cy.get('#add-recognized-items').click()
    //cy.get('#restart-scan').should('be.visible')
  })

  it('CHKME-242: Saisie manuelle/lecture d"un format S/N ', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()

    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST09')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-items-count').should('be.visible')
    cy.get('.sw-btn-next').click().wait(1500)
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('.card > .widget-content-left > .custom-checkbox').click().wait(3000)
    cy.get('#apply-assignment > .ladda-label').click()
    cy.get('.sw-btn-next').click()
    //cy.get('#add-recognized-items').click()
    //cy.get('#restart-scan').should('be.visible')
  })

  it('CHKME-243: Saisie manuelle/lecture d"un GS1 Sicame avec GTIN introuvable sous Pimcore', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321INEXISTANTGTIN')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#scanned-items-count').should('be.visible')
  })

  it('CHKME-244: Saisie manuelle/lecture d"un GS1 client Invalide', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('(01)929911900000001119091321ITEMTEST10')
    cy.get('#manual-reference-add > .fas').click()
    //cy.get('#client-gtin-error').should('have.value', 'Désolé, Le GTIN utilisé ne correspond à aucun GTIN client dans ce park')
    cy.get('#client-gtin-error').should('be.visible')
  })

  it('CHKME-245: Saisie manuelle/lecture d"un GS1 client valide', function () {
    cy.get(':nth-child(5) > :nth-child(1) > a > .metismenu-icon').click()
    cy.get(':nth-child(2) > .card > .icon-wrapper > .fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('(01)984646300000011119091321ITEMTEST10')
    cy.get('#manual-reference-add > .fas').click()
    //cy.get('#scanned-items-count').should('be.visible')
    // cy.get('.sw-btn-next').click().wait(1500)
    // cy.get('#check-all').click()
    // cy.get('#apply-assignment').click()
    // cy.get('.card > .widget-content-left > .custom-checkbox').click().wait(3000)
    // cy.get('#apply-assignment > .ladda-label').click()
    // cy.get('.sw-btn-next').click()
    // cy.get('#add-recognized-items').click()
    // cy.get('#restart-scan').should('be.visible')
  })

})