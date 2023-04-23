import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given ('we are on amazon website', () => {
    cy.visit('https://www.amazon.com/')
    cy.url().should('eq', 'https://www.amazon.com/');
    cy.scrollTo('bottom');
    cy.get('#rhf-container > .rhf-border').within(() => {
        cy.get('div').should('contain','See personalized recommendations');
        })

})

When ('we click on button All', () => {
    cy.get('#hmenu-canvas').should('not.exist');
    cy.get('#nav-hamburger-menu').click();

})

Then ('sidebar is displayed', () => {
    cy.get('#hmenu-canvas').should('exist');

})

When ('we click on dropdown', () => {
    cy.get('.hmenu-compress-section.compressed');
    cy.get('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(12) > a.hmenu-item.hmenu-compressed-btn > i').click();
    cy.get('.hmenu-compress-section.compressed').should('not.be.visible');

})

Then ('options are displayed', () => {
    cy.get('.hmenu-compress-section');


})

When ('we click on the option', () => {

    cy.get('#hmenu-content > ul.hmenu.hmenu-visible > ul:nth-child(11) > li:nth-child(4) > a').click();
    cy.get('#hmenu-content > ul.hmenu.hmenu-visible.hmenu-translateX > li:nth-child(3) > a').click();
    
    
    
    

})

Then ('we are taken to the option page', () => {


})



