import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../support/pages/HomePage';
import ProductPage from '../../support/pages/ProductPage';
const homePage = new HomePage();
const productPage = new ProductPage();

Given('search and select the desired item', () => {
    homePage.visitWebsite();
    homePage.fillSearch('Blouse');
    homePage.clickSearch();
    productPage.moreDetails();
});

And('inform quantity and size', () => {
    productPage.addQuantity();
    productPage.selectSize('M');
});

When('add to cart', () => {
   productPage.addCart();  
});

Then('view the details for checkout', () => {
    productPage.proceedCheckout();
});