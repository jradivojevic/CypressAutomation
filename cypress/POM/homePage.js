class homePage{
    get logo(){
        return cy.get('body > nav > a').should('contain', 'UITAP');
    }
    get homeLink(){
        return cy.get('#navbarSupportedContent > ul > li.nav-item.active > a').should('contain', 'Home');
    }
    get resources(){
        return cy.get('#navbarSupportedContent > ul > li:nth-child(2) > a').should('contain', 'Resources');
    }
}
export default new homePage();

