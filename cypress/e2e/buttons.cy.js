/// <reference types="cypress" />



describe('Context : My First Tests', () => {


    beforeEach(() => {


 
        cy.clearAllCookies();
        cy.visit('/multiple_buttons');
    })





    it('Check different button actions', () => {


cy.contains('Button 2').should('be.visible').click();
cy.contains('Clicked on button two!').should('be.visible');

// find element with class attribute and create a list then select 3rd element

// by using wrap method, I am turning JQuery element into Cypress Element

cy.get('.btn.btn-primary').then(($buttons) => {

    cy.wrap($buttons).eq(2).click();

   // assert the text 

   cy.contains('Clicked on button three!').should('be.visible');

    })










    })
})


