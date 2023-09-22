// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('selectProduct', (productName) => {

    cy.get('.col-lg-9:nth-child(2)').find('.card-title a').each(($el, index, $list) => {
        const itemName = $el.text()

        if (itemName.includes(productName)) {

            cy.get('.card-footer button').eq(index).click()
        }
    })
})

Cypress.Commands.add('selectCountry', (countryName) => {

    cy.get('#country').type(countryName)
    
    cy.get('.suggestions li').each(($el, index, $list) => {
        const itemName = $el.text()

        if (itemName.includes(countryName)) {
            
            cy.wrap($el.eq(index)).click()
        }
    })
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })