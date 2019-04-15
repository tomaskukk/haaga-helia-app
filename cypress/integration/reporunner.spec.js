/// <reference types="Cypress" />

it('Book a sauna time', () => {
  cy.visit('https://repo.haaga-helia.fi/reportronicnet_ad3/')
  cy.wait(10000)
  cy.on('window:alert', () => {
    cy.wait(5000)
  })
 
})



