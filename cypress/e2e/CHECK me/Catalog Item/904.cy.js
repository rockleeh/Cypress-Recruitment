//OK ! MAJ ref
/// <reference types="cypress" />

describe('904', function () {
  const username = 'Admin'
  const password = 'CATUelec92220!'
  const username2 = 'Teamone'
  const password2 = 'Teamone92220&'
  const site = 'http://mycatutrack.catudev.com/fr/'
  var ch = ''
  var c ='0'
  beforeEach(() => {
    cy.viewport(1500, 720);
    cy.visit({
      url: site,
      method: 'GET',
    })
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    });
    
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

  it('CHKME-287: Ajout d"une référence pimcore pour un admin CATU', function () {
    //login
    cy.wait(1500)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click().wait(1500)
    cy.wait(1500)

    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(2000)

    cy.get('#addReference').click()
    cy.wait(1500)
    cy.get('.page-title-heading > :nth-child(2)').should('be.visible')
    cy.get('#my-reference').type("REF-TEST-1002") //++
    cy.get('#search-sicame-references').type("CN-7-066-410-K").wait(4000)
    cy.get('#search-sicame-references').type('{enter}')
    cy.get('#gtin-code').invoke('val').should('not.be.empty')
    cy.get('#gtin-code').invoke('val').then(text => {
      ch = text;
      cy.log(ch);
      c = ch.charAt(0);
      cy.log(c);
      if (c != "3"){
        cy.log("GTIN incorrect !!!!!!!!!!!")
        }
      })
      cy.wait(2000)
    cy.get(':nth-child(9) > .select2-container > .selection > .select2-selection').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.wait(2000)
    cy.get('.description-step > .nav-link').should('be.visible')
    cy.get('#manufacturer').invoke('val').should('not.be.empty')
    cy.get('#short-description').invoke('val').should('not.be.empty')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('#add-reference').should('be.visible')
    //cy.get('#add-reference').click()
    //cy.get('.validation-icon').should('be.visible')
      cy.log("OK")
  })

  it('CHKME-288: Modification d"une référence pimcore pour un admin CATU', function () {
    //login
    cy.wait(1500)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click().wait(1500)
    cy.wait(1500)

    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(2000)

    cy.get('#InternalCatalogList_filter > label > .form-control').type('CN-7-066-410-K')
    cy.get('[data-reference-id="52"] > .more-details > .hamburger').click()
    cy.get('.mr-0 > span').should('be.visible').click()
    cy.get('#my-reference').invoke('val').then(text => {
      ch = text;
      ch = ch + '-011' //++
      cy.get('#my-reference').clear()
      cy.get('#my-reference').type(ch)
      })
    cy.get('.sw-btn-next').click()
    cy.wait(2000)
    cy.get('.description-step > .nav-link').should('be.visible')
    cy.get('#manufacturer').invoke('val').should('not.be.empty')
    cy.get('#short-description').invoke('val').should('not.be.empty')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    //cy.get('#edit-reference').click()
    cy.log("OK")
  })

  it('CHKME-289: Ajout d"une référence client pour un admin CATU', function () {
    //login
    cy.wait(1500)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click().wait(1500)
    cy.wait(1500)

    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(2000)

    cy.get('#addReference').click()
    cy.wait(1500)
    cy.get('.page-title-heading > :nth-child(2)').should('be.visible')
    cy.get('#my-reference').type("REF-125202") //++
    cy.get('#search-sicame-references').type("DX-02007").wait(4000)
    cy.get('#search-sicame-references').type('{enter}')
    cy.get('#gtin-code').invoke('val').should('not.be.empty')
    cy.get('#gtin-code').invoke('val').then(text => {
      ch = text;
      cy.log(ch);
      c = ch.charAt(0);
      cy.log(c);
      if (c != "9"){
        cy.log("GTIN incorrect !!!!!!!!!!!")
        }
      })
      cy.wait(2000)
    cy.get(':nth-child(9) > .select2-container > .selection > .select2-selection').click()
    cy.get('.select2-results__option--highlighted').click()
    cy.get('.sw-btn-next').click()
    cy.wait(2000)
    cy.get('.description-step > .nav-link').should('be.visible')
    cy.get('#manufacturer').invoke('val').should('not.be.empty')
    cy.get('#short-description').invoke('val').should('not.be.empty')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('#add-reference').should('be.visible')
    //cy.get('#add-reference').click()
    //cy.get('.validation-icon').should('be.visible')
  })

  it('CHKME-290: Modification d"une référence client pour un admin CATU', function () {
    //login
    cy.wait(1500)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type(username)
    cy.get('#typepass').type(password)
    cy.get('#loginForm > .btn').click().wait(1500)
    cy.wait(1500)

    cy.get(':nth-child(15) > :nth-child(1) > a').click()
    cy.wait(2000)

    cy.get('#InternalCatalogList_filter > label > .form-control').type('DX-02007').wait(1000)
    cy.get('[data-reference-id="92"] > .more-details > .hamburger').click().wait(1000)
    cy.get('.mr-0 > span').should('be.visible').click()
    cy.get('#my-reference').invoke('val').then(text => {
      ch = text;
      ch = ch + '-012'//++
      cy.get('#my-reference').clear()
      cy.get('#my-reference').type(ch)
      })
    cy.get('.sw-btn-next').click()
    cy.wait(2000)
    cy.get('.description-step > .nav-link').should('be.visible')
    cy.get('#manufacturer').invoke('val').should('not.be.empty')
    cy.get('#short-description').invoke('val').should('not.be.empty')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.log("OK")
    //cy.get('#edit-reference').click()
    
 })
  

})