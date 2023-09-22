class CartPage{

    checkoutButton() {

        return cy.get('.btn-success')
    }

    selectCountry() {

        return cy.get('#country')
    }

    termsCheckbox() {

        return cy.get('.checkbox input')
    }

    purchaseButton() {

        return cy.get('.ng-untouched > .btn')
    }
}

export default CartPage;