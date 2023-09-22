/// <reference types="cypress" />

describe('Handling Alerts and Popups', () => {

    it('Test case to handle Alerts', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.origin('https://www.qaclickacademy.com/', () => {

            cy.url().should('include', Cypress.env('expectedText'))

            cy.go('back')

        })

    })
})