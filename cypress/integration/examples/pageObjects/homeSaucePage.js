class homeSaucePage{

    typeUsername(username){

        return cy.get('#user-name').type(username)
    }

    typePassword(password){

        return cy.get('#password').type(password)
    }

    loginButton(){

        return cy.get('#login-button')
    }

    titleSpan(){

        return cy.get('.product_label')
    }

    errorMessage(){

        return cy.get('h3')
    }
}

export default homeSaucePage;