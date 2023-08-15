/// <reference types="cypress" />



describe('Context : My First Tests', () => {


    beforeEach(() => {


 
        cy.clearAllCookies();
        cy.visit('/multiple_buttons');
    })





    it('Check different button actions', () => {


cy.contains('Button 2').should('be.visible').click();
cy.contains('Clicked on button two!').should('be.visible');






    })
})


