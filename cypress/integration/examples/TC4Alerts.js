/// <reference types="cypress" />

describe('Handling Alerts and Popups', ()=>{
    
    it('Test case to handle Alerts', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#name').type('Prem')
        cy.get('input[value="Alert"]').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert', (str)=>{

            expect(str).to.equal('Hello Prem, share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr','target').click()
 
        cy.origin('https://www.qaclickacademy.com/', () => {

        cy.url().should('include', 'qaclickacademy')   

      cy.go('back')

    })
        
        
    })
}) 