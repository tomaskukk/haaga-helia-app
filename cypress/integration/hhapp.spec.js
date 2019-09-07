/// <reference types="Cypress" />


context('HHapp UI tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', () => {
    cy.contains('Haaga-Helia App')
  })

  it('should be able to search tn2pd timetable and find ENG1TN003-3002 course', () => {
    cy.get('#groupInput')
      .type('tn2pd')
    cy.get('#searchButton')
      .click()
    cy.contains('ENG1TN003-3002')
  })

  it('should be able to search tn2pa timetable and find ENG1TN003-3001 course', () => {
    cy.get('#groupInput')
      .type('tn2pa')
    cy.get('#searchButton')
      .click()
    cy.contains('BUS1TN011-3007')
  })

  it('switching lunchbuttons should display correct campus text', () => {
    cy
      .get('#pasilaButton')
      .click()
    cy.contains('Pasila lounaslista')
    
    cy
      .get('#malmiButton')
      .click()
    cy.contains('Malmi lounaslista')
    
    cy
      .get('#haagaButton')
      .click()
    cy.contains('Haaga lounaslista')
  })

  it('switching language to english should display page in english', () => {
    cy.get('.langButton')
      .click()
    cy.contains('Group id')
    cy.contains('Student parties')
  })

  

  it('searching timetable should be saved in localstorage', () => {
    cy.get('#groupInput')
      .type('tn1pb1')
    cy.get('#searchButton')
      .click()
      .should(() => {
        expect(localStorage.getItem('lukkariTunnus')).to.eq('tn1pb1')
      })
  })

  it('clicking other campus foodlist should be saved in localstorage', () => {
    cy
      .get('#malmiButton')
      .click()
      .should(() => {
        expect(localStorage.getItem('location')).to.eq('Malmi')
      })
  })

  it('empty response from foodlist should tell that it is not availaible yet', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '/api/amica',
      response: []
    })
    cy.contains('Ei saatavilla vielä')
  })
})
