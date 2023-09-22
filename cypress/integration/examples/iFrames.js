/// <reference types="cypress" />
/// <reference types="Cypress-iframe"/>

import 'cypress-iframe'

describe('Handling iFrames', () => {

    it('First Test case to handle iFrames', () => {

        cy.visit('https://jqueryui.com/draggable/')

        cy.frameLoaded(".demo-frame")

        cy.iframe().find("#draggable").then(function(txt){
            const txtframe = txt.text();
            //assertion to verify text
            expect(txtframe).to.contains('Drag me around');
            cy.log(txtframe);
         })
    })

})