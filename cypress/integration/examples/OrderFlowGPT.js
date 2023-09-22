describe('Checking the order flow', () => {

    
        // Runs before all 'it' blocks, you can add common setup steps here
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
    

    it('Search and Add Product to Cart', () => {
        cy.get('.search-keyword').type('ca');
        
        cy.get('.products')
            .find('.product')
            .each(($product) => {
                const productName = $product.find('.product-name').text();

                if (productName.includes('Cashews')) {
                    $product.find('button').trigger("click");
                }
            });

        cy.get('.cart-icon img').click();

        // Assertion: Verify product is added to the cart
        cy.get('.cart-preview .product-name').invoke('text').should('include', 'Cashew');
    });

    it('Proceed to Checkout', () => {
        cy.get('.cart-preview div button').click();

        // Assertion: Verify the user is on the checkout page
       // cy.url().should('include', '/checkout');
    });

    it('Place Order', () => {
        cy.get(':nth-child(14)').click();
        
        
        cy.get('select')
            .select('India')
            .should('have.value', 'India');
        
        cy.get('.chkAgree').click();
        
        cy.get('button').click();

        // Assertion: Verify the order is placed successfully
        cy.get('[style="color:green;font-size:25px"]').should('include.text', 'Thank you');
    });
});
