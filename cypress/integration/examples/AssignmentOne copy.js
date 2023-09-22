/// <reference types="cypress" />

describe('Handling Alerts and Popups', () => {
    it('Test case to handle Alerts', () => {
        const urlRedirects = [];

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#opentab').invoke('removeAttr', 'target').click();

        cy.on('url:changed', (url) => {
            urlRedirects.push(url);
            cy.get('ul > :nth-child(1) > span').invoke('text').then((text) => {
                cy.log(text);
              });
        });

        
        // cy.log(cy.get('ul > :nth-child(1) > span').text())
        
        
        //cy.url().should('include', Cypress.env('expectedText'));

        // Perform any additional interactions, assertions, or test steps as needed

        // After you're done, redirect back to the main URL
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.then(() => {
            expect(urlRedirects).to.have.length(3); // Adjust the length based on the number of redirects
            expect(urlRedirects[0]).to.eq('https://rahulshettyacademy.com/AutomationPractice/');
            
            expect(urlRedirects[1]).to.eq('https://www.qaclickacademy.com/')
            // Add other assertions for URL redirects if needed
        });
    });
});