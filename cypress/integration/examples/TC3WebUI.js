/// <reference types="cypress" />

describe('Automating web UI controls', ()=>{

    it('First test case', ()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        //Checking multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        cy.get('#dropdown-class-example')
        .select('Option2')
        .should('have.value', 'option2')

        cy.get('#autocomplete').type('Ind')
        
        cy.get('.ui-menu-item div').each(($el, index, list)=>{

            if($el.text()==='Indonesia'){
                cy.wrap($el).click()
            }
        })

        cy.get('#autocomplete').should('have.value', 'Indonesia')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


        cy.get('[for="radio1"] > .radioButton').check().should('be.checked')

    })
})