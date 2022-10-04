//OK !
/// <reference types="cypress" />

describe('878', function () {
  
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

  it('CHKME-248: Génération d"un GTIN client pour un admin CATU', function () {
   
    //login
    cy.wait(1000)
    cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type('Admin')
    cy.get('#typepass').type('CATUelec92220!')
    cy.get('#loginForm > .btn').click()
    cy.wait(1500)
    cy.get(':nth-child(15) > :nth-child(1) > a').click().wait(1000)
    cy.get('#addReference').click()
    cy.get('#step-1 > :nth-child(1)').should('be.visible')
    cy.get('#my-reference').type('REF-TEST-121') //++
    cy.get(':nth-child(9) > .select2-container > .selection > .select2-selection').click()
    cy.wait(1000)
    cy.get('[data-select2-id="14"]').click()
    cy.get('#gtin-code').invoke('val').should('not.be.empty')
    cy.get('#gtin-code').invoke('val').then(text => {
      ch = text;
      cy.log(ch);
      c = ch.charAt(0);
      cy.log(c);
      if (c != "9"){
        cy.log("GTIN incorrect !")
        }
      })
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.description-step > .nav-link').should('be.visible')
    cy.get('#short-description').type('test automate description')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('.sw-btn-next').click()
    cy.wait(1000)
    cy.get('.active > .nav-link').should('be.visible')
    cy.get('#add-reference').click()
    cy.get('.validation-icon > .swal2-success > .swal2-success-circular-line-left').should('be.visible')
    })


  // it('CHKME-249: Génération d"un GTIN client pour un admin site', function () {
  
  //   //login
  //   cy.wait(1500)
  //   cy.get('#loginForm > .form-row > :nth-child(1) > .position-relative > .form-control').type('Teamone')
  //   cy.get('#typepass').type('Teamone92220&')
  //   cy.get('#loginForm > .btn').click().wait(1500)

  //   cy.get(':nth-child(15) > :nth-child(1) > a').click().wait(1000)
  //   cy.get('#addReference').click()
  //   cy.get('#step-1 > :nth-child(1)').should('be.visible')
  //   cy.get('#my-reference').type('REF-TEST-101')
  //   cy.get('#search-sicame-references').click().wait(500)
  //   cy.get('#gtin-code').invoke('val').should('not.be.empty')
  //   cy.get('#gtin-code').invoke('val').then(text => {
  //     ch = text;
  //     cy.log(ch);
  //     c = ch.charAt(0);
  //     cy.log(c);
  //     if (c =! '9'){
  //       cy.log('GTIN incorrect !')
  //       cy.end()
  //       }
  //     })
  //   cy.get('.sw-btn-next').click()
  //   cy.wait(1000)
  //   cy.get('.description-step > .nav-link').should('be.visible')
  //   cy.get('#short-description').type('test automate description')
  //   cy.get('.sw-btn-next').click()
  //   cy.wait(1000)
  //   cy.get('.active > .nav-link').should('be.visible')
  //   cy.get('.sw-btn-next').click()
  //   cy.wait(1000)
  //   cy.get('.active > .nav-link').should('be.visible')
  //   cy.get('.sw-btn-next').click()
  //   cy.wait(1000)
  //   cy.get('.active > .nav-link').should('be.visible')
  //   cy.get('#add-reference').click()
  //   cy.get('.validation-icon > .swal2-success > .swal2-success-circular-line-left').should('be.visible')
  // })

})