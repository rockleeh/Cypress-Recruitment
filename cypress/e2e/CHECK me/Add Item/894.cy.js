//OK !
/// <reference types="cypress" />

describe('894', function () {
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

  it('CHKME-283: Vérification d"accès à la carte d"un article sicame ajouté ', function () {
    cy.get('.vertical-nav-menu > :nth-child(5) > :nth-child(1) > a').click()
    cy.get(':nth-child(2)>.card>.icon-wrapper>.fa').click()
    cy.get('#select2-park-preselection-container > .select2-selection__placeholder').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.get('#manual-reference-input').type('ITEMTEST151')
    cy.get('#manual-reference-add > .fas').click()
    cy.get('#barcode-camera-input').should('be.visible')
    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('#select2-select2-checkme-references-container').click().wait(1000)
    cy.get('.select2-results__option--highlighted').click()
    cy.get('#apply-informations').click().wait(1000)
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
    cy.get('#add-recognized-items').click()
    cy.get('#restart-scan').should('be.visible')

    cy.get(':nth-child(11) > :nth-child(1) > a').click().wait(3000)
    cy.get('#custom-search-input').type('ITEMTEST151')
    cy.get('#search-action').click().wait(1000)
    cy.get('.toggleable > :nth-child(2) > a').should('have.text', 'ITEMTEST151')
    cy.get('.toggleable > :nth-child(2) > a').click()
    cy.get('.app-main__inner > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('#home > :nth-child(1) > :nth-child(1)').should('be.visible')
    cy.get('#home > :nth-child(1) > :nth-child(2) > .row > :nth-child(1)').should('be.visible')
    cy.get('#home > :nth-child(2) > :nth-child(2)').should('be.visible')
    cy.get('#home > :nth-child(2) > :nth-child(1)').should('be.visible')
    cy.get('#home > :nth-child(3) > .col-md-12').should('be.visible')
    cy.get('a:contains("Chronologie")').first().click()
    cy.get('#timeline-status').should('be.visible')
    cy.get('a:contains("Description technique")').first().click()
    cy.get('#description > .row > .col-md-12').should('be.visible')
    cy.get('a:contains("Documentation")').first().click()
    cy.get('#documentation > .row > .col-md-12').should('be.visible')
    
  })

})