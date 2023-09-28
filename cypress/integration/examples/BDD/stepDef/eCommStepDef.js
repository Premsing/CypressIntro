import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "./pageObjects/HomePage"
import ProductsPage from "./pageObjects/ProductsPage"
import CartPage from "./pageObjects/CartPage"
import SuccessPage from "./pageObjects/SuccessPage"

    const homePage = new HomePage();
    const productsPage = new ProductsPage();
    const cartPage = new CartPage();
    const successPage = new SuccessPage();

Given("open the eCommerce Application", function () {
    cy.visit(Cypress.env('url')+'/angularpractice/')
  })

When('I add products to shopping cart', function(){

    homePage.shoppingTab().click()

        cy.log(value.productsToAdd)

        value.productsToAdd.forEach(function (element) {

            cy.selectProduct(element)

        });

        productsPage.checkoutButton().click()
})

And('valdiate the total cart amount', function(){

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

})

Then('select the country and verify thank you message', function(){

    cartPage.checkoutButton().click()

        cy.selectCountry('Serbia')

        cartPage.termsCheckbox().check({ force: true })

        cartPage.purchaseButton().click()

        successPage.validationMessage().invoke('text').should('include', value.expect)

})

When('I fill the form details', function(){
    homePage.nameInputBox().type(globalThis.data.name)

    homePage.getGender().select(globalThis.data.gender)

})

Then('validate the form behaviour', function(){

    homePage.twoWayDataBinding().should('have.value', globalThis.data.name)

    homePage.nameInputBox().should('have.attr', 'minlength', 2)

    homePage.getEntrepreneurRadioButton().should('be.disabled')
})

Then('select the shop page', function(){
    homePage.shoppingTab().click()

})