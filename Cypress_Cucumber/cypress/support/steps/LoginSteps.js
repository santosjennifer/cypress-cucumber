import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

import HomePage from '../../support/pages/HomePage';
import LoginPage from '../../support/pages/LoginPage';
import MyAccountPage from '../../support/pages/MyAccountPage';
const homePage = new HomePage();
const loginPage = new LoginPage();
const myAccountPage = new MyAccountPage();

Given('I am on the login page', () => {
    homePage.visitWebsite();
    homePage.clickSingIn();
});

Given('fill email and password', () => {
    loginPage.fillCredentialsForm('666umtapa@orelha.com','123456');
});

When('click sing in', () => {
    loginPage.clickSingIn();
});

Then('direct to My Account page', () => {
    myAccountPage.seeMyAccount();
});


