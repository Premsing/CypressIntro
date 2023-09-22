/// <reference types="cypress" />

describe('Checking the order flow', () => {

    it('Order flow test', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        // click on the product based on name
        cy.get('.products')
            .find('.product')
            .each(($product) => {
                const productName = $product.find('.product-name').text(); // Assuming there's a class for product name

                if (productName.includes('Cashews')) {
                    $product.find('button').trigger("click");
                }
            });

        cy.get('.cart-icon img').click()

        cy.get('.cart-preview div button').click()

        cy.get(':nth-child(14)').click()

        cy.get('select')
            .select('India')
            .should('have.value', 'India')

        cy.get('.chkAgree').click()

        cy.get('button').click()

        cy.get('[style="color:green;font-size:25px"]').invoke('text').should('include', 'Thank you')
    })
})