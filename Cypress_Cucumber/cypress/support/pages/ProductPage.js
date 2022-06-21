/// <reference types="Cypress" />

import ProductElements from '../elements/ProductElements'
const productElements = new ProductElements();

class ProductPage {

    addQuantity(){
        cy.get(productElements.buttonPlus()).click();       
    }

    selectSize(size){
        cy.get(productElements.listboxSize()).select(size);     
    }

    moreDetails(){
        cy.get(productElements.buttonDetails()).click(); 
    }

    addCart(){
        cy.get(productElements.buttonAddCart()).click(); 
    }

    proceedCheckout(){
        cy.get(productElements.buttonProceedCheckout()).click(); 
    }
}
export default ProductPage;