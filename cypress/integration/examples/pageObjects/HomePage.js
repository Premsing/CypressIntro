class HomePage {

    nameInputBox() {

        return cy.get('input[name="name"]:nth-child(2)')
    }

    getGender() {

        return cy.get('select')
    }

    twoWayDataBinding() {

        return cy.get('input[name="name"]:nth-child(1)')
    }

    getEntrepreneurRadioButton() {

        return cy.get('input[value="option3"]')
    }

    shoppingTab() {

        return cy.get('.navbar-nav li:nth-child(2)')
    }

}

export default HomePage;