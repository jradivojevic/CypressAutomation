import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../POM/homePage";

Given ('Website has been opened', () => {
    cy.visit('/');
    homePage.logo.should('be.visible');
    cy.url().should('contain', 'http://uitestingplayground.com/');
    homePage.homeLink.click();
    cy.url().should('contain', '/home');
})

When ('We click on Resources page', () => {
    cy.intercept('http://uitestingplayground.com/resources').as('pageFullyLoaded');
    homePage.resources.click();
    cy.wait(['@pageFullyLoaded'], {requestTimeout: 5000, responseTimeout: 5000});
})

Then ('Resource page should be opened and loaded fully', () => {

})