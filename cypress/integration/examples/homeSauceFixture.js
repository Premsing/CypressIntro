import homeSaucePage from "./pageObjects/homeSaucePage";
const tests = require('../../fixtures/sauceUsers.json')
const homePage = new homeSaucePage()
describe('POM Implementation in Fixture file', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/index.html')
    })

    tests.forEach(test => {

        it(test.name, () => {

            homePage.typeUsername(test.username)
            homePage.typePassword(test.password)
            homePage.loginButton().click()

            if (test.name === 'should login to inventory page') {

                homePage.titleSpan().should('have.text', test.expected)
            } else {

                homePage.errorMessage().should('have.text', test.expected)
            }

        })
    })
})