/// <reference types="cypress" />

describe('Handling Alerts and Popups', () => {

  it('Test case to handle Alerts', () => {

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    cy.get('.table-display tr td:nth-child(2)').each(($el, index, $list) => {

      if ($el.text().includes('Python')) {


        cy.get("tr td:nth-child(2)").eq(index).next().then(function (price) {
          const priceText = price.text()
          expect(priceText).to.equal('25')
        })
      }
    })

    // cy.scrollTo(0, 800)
    //cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({ force: true })
    cy.url().should('include', 'top')

  })

})
