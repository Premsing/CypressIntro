/// <reference types="cypress" />

describe('My First Test', () => {
    it('Does not do much!', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.products').as('allProducts')

        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length', 4)
        cy.get('@allProducts').find('.product').should('have.length', 4)

        console.log('JS log')
        // Indexing
        //cy.get('.products').find('.product').eq(-1).contains('ADD TO CART').click()

        // Iterate through each product and find the one with 'Cashews' as the product name
        cy.get('@allProducts')
            .find('.product')
            .each(($product) => {
                const productName = $product.find('.product-name').text(); // Assuming there's a class for product name

                if (productName.includes('Carrot')) {
                    $product.find('button').trigger("click");
                }
            });

        cy.get('.brand').then(function (logoEl) {

            cy.log(logoEl.text())
        }
        )
        cy.get('.brand').should('have.text','GREENKART')

        cy.get('.cart-icon img').click().debug()
        
        cy.get('.cart-preview div button').click()

        cy.get(':nth-child(14)').click()

        cy.get('select').debug()
        .select('India')
        .should('have.value', 'India')

        cy.get('.chkAgree').click()

        cy.get('button').click()

        cy.get('[style="color:green;font-size:25px"]').invoke('text').should('include','Thank you')


    })
})