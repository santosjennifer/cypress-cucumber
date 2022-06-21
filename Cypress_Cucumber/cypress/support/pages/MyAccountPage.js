/// <reference types="Cypress" />

import MyAccountElements from '../elements/MyAccountElements'
const myAccountElements = new MyAccountElements

class MyAccountPage {

    seeMyAccount() {
        cy.get(myAccountElements.myAccount()).should('contain', 'Welcome');
    }
}
export default MyAccountPage;