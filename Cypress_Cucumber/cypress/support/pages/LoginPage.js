/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements

class LoginPage {

    fillCredentialsForm(email,password) {
        cy.get(loginElements.inputEmail()).type(email);
        cy.get(loginElements.inputPassword()).type(password);
    }
 
    clickSingIn() {
        cy.get(loginElements.buttonSingIn()).click();
    }
}
export default LoginPage;