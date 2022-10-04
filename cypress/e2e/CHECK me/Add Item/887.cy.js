// OK (4ém item format incorrrect)
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
    cy.wait(2000)
    cy.get('#loginForm > .btn').should('be.visible')
  })

  it('CHKME-263: Saisie manuelle/cas d"un format GS1 HRI ', function () {
    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()

    cy.get(':nth-child(2)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()

    cy.get('.select2-results__option--highlighted').click()

    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('(01)035975600618641119091321ITEMTEST25')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0359756005578821GANTTEST13(95)0001')
    cy.get('#manual-reference-add > .fas').click().wait(1000)
    cy.get('#barcode-camera-input').should('be.visible').should('have.value', '/GANTTEST13')
    //cy.get('.position-relative > .select2-container > .selection > .select2-selection').click()
    //cy.get('#select2-select2-checkme-references-container option:selected').should('have.value', 'GSM-00-11')
    cy.get('#apply-informations').click()
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)0359756000019121G0009QAH(95)0001')
    cy.get('#manual-reference-add > .fas').click().wait(1000)
    cy.get('#scanned-item-3597560000191-G0009QAH > .card > .widget-chart-actions > .mb-2').should('be.visible')
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('(01)9846463000000121ITEMTEST26')
    cy.get('#manual-reference-add > .fas').click().wait(2000)
    cy.get('.sw-btn-next').click().wait(500)
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('#apply-assignment > .ladda-label').click()
    cy.get('.sw-btn-next').click()
    //cy.get('#add-recognized-items').click()
    //cy.get('#restart-scan').should('be.visible')
  })

  it('CHKME-264: Saisie manuelle/cas d"un format S/N', function () {
    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()

    cy.get(':nth-child(2)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.wait(500)
    cy.get('[data-select2-id="19"]').click()

    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('ITEMTEST27')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#barcode-camera-input').should('be.visible')
    cy.get('#barcode-camera-input').should('have.value', 'ITEMTEST27')
    cy.get('.position-relative > .select2-container > .selection > .select2-selection').click().wait(500)
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.ladda-label > .fa').click()
    cy.get('#manual-reference-input').clear()
    cy.get('#manual-reference-input').type('/GANTTEST14')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#barcode-camera-input').should('be.visible')
    cy.get('#barcode-camera-input').should('have.value', '/GANTTEST14')
    cy.get('.position-relative > .select2-container > .selection > .select2-selection').click().wait(500)
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.ladda-label > .fa').click()
    cy.get('.sw-btn-next').click().wait(500)
    cy.get('#check-all').click()
    cy.get('#apply-assignment').click()
    cy.get('#apply-assignment > .ladda-label').click()
    cy.get('.sw-btn-next').click()
    //cy.get('#add-recognized-items').click()
    //cy.get('#restart-scan').should('be.visible')
  })


})