/// <reference types="cypress" />
import HomePage from "./pageObjects/HomePage"
import ProductsPage from "./pageObjects/ProductsPage"
import CartPage from "./pageObjects/CartPage"
import SuccessPage from "./pageObjects/SuccessPage"

describe('End to End Framework', () => {

    before(() => {


        cy.fixture('example').then(function (data) {
            globalThis.data = data
        })
    })

    it('First Test case in e2e', () => {
        cy.visit(Cypress.env('url')+'/angularpractice/')

        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        const cartPage = new CartPage();
        const successPage = new SuccessPage();

        homePage.nameInputBox().type(globalThis.data.name)

        homePage.getGender().select(globalThis.data.gender)

        homePage.twoWayDataBinding().should('have.value', globalThis.data.name)

        homePage.nameInputBox().should('have.attr', 'minlength', 2)

        homePage.getEntrepreneurRadioButton().should('be.disabled')

        homePage.shoppingTab().click()

        cy.log(globalThis.data.productsToAdd)

        globalThis.data.productsToAdd.forEach(function (element) {

            cy.selectProduct(element)

        });

        productsPage.checkoutButton().click()

        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {

            const price = $el.text()
            const numericValue = parseInt(price.split(' ')[1])
            sum += numericValue;

        })

        // Get the numeric value of the total
        cy.get('tr td:nth-child(5) strong').then(function (priceEl) {

            const numericValueTotal = Number(priceEl.text().match(/\d+/)[0])

            cy.log(numericValueTotal)
            cy.log('Sum of numeric values:', sum);
            // Assert whether the sum and numericValueTotal are equal
            expect(sum).to.equal(numericValueTotal)
        })

        cartPage.checkoutButton().click()

        cy.selectCountry('Serbia')

        cartPage.termsCheckbox().check({ force: true })

        cartPage.purchaseButton().click()

        successPage.validationMessage().invoke('text').should('include', 'Success!')
    })

})