import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

before(function(){
    cy.fixture('information').then(function(data){
        this.data = data
    })
})

Given ('amazon website is open', () => {
    cy.visit('https://www.amazon.com/')
    cy.url().should('eq', 'https://www.amazon.com/');
    cy.scrollTo('bottom');
    cy.get('#rhf-container > .rhf-border').within(() => {
        cy.get('div').should('contain','See personalized recommendations');
        })
})

When ('we search for a {string}', (book) => {
    cy.scrollTo('top');
    cy.get('#twotabsearchtextbox').type(book);
    // amazonSearchBar.type(book)
    
})

Then ('results are displayed', () => {
   // cy.get('#nav-flyout-searchAjax').should('contain', 'bdd in action, second edition');
})

// When ('we click on one of the results', () => {
//     cy.get('#nav-flyout-searchAjax').contains('bdd in action, second edition').click();
//     cy.get('[data-cel-widget="search_result_2"]').should('be.visible')
//     cy.get('[data-cel-widget="search_result_3"]').should('be.visible')
//     cy.get('[data-cel-widget="search_result_4"]').should('be.visible')
//     cy.get('[data-asin="B0C2122YWY"] > :nth-child(1) > .s-widget-container > .s-card-container > :nth-child(1) > :nth-child(1) > .s-list-col-left > .sg-col-inner > .s-product-image-container > :nth-child(1) > .rush-component > .a-link-normal > .a-section > .s-image').click();
// })

// Then ('we are taken onto the item page', () => {
//     cy.get('#productTitle').should('contain','BDD in Action, Second Edition');


// })


