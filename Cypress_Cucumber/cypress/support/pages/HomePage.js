/// <reference types="Cypress" />

import HomeElements from '../elements/HomeElements'
const homeElements = new HomeElements();

const url = Cypress.config("baseUrl")

class HomePage {
   
    visitWebsite() {
        cy.visit(url)
    }

    clickSingIn(){
        cy.get(homeElements.buttonSingIn()).click();       
    }

    clickSearch(){
        cy.get(homeElements.buttonSearch()).click();
    }

    fillSearch(item){
        cy.get(homeElements.inputSearch()).type(item);
    }    

}
export default HomePage;