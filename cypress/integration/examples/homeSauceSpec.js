import homeSaucePage from "./pageObjects/homeSaucePage";
const tests = require('../../fixtures/sauceUsers.json')
const homePage = new homeSaucePage()
describe('POM Implementation in Spec', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    it('should login to inventory page', () => {
        homePage.typeUsername('standard_user');
        homePage.typePassword('secret_sauce');
        homePage.loginButton().click()
        homePage.titleSpan().should('have.text', 'test')
    });

    it('should display locked out message', () => {
        homePage.typeUsername('locked_out_user');
        homePage.typePassword('secret_sauce');
        homePage.loginButton().click()
        homePage.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    });

    it('should display incorrect username message', () => {
        homePage.typeUsername('dummyUsername');
        homePage.typePassword('secret_sauce');
        homePage.loginButton().click()
        homePage.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });

    it('should display incorrect password message', () => {
        homePage.typeUsername('locked_out_user');
        homePage.typePassword('dummyPassword');
        homePage.loginButton().click()
        homePage.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    });
})