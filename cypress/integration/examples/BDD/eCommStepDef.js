import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "./pageObjects/HomePage"
import ProductsPage from "./pageObjects/ProductsPage"
import CartPage from "./pageObjects/CartPage"
import SuccessPage from "./pageObjects/SuccessPage"
    const homePage = new HomePage();
    const productsPage = new ProductsPage();

Given('open the eCommerce Application', function(){

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