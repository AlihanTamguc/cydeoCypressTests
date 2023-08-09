/// <reference types="cypress" />


describe('Context : My First Tests', () => {

    before(() => {


        // runs once before all test cases in this describe block, beforeClass in TestNG


    })

    beforeEach(() => {


        // runs before each test case, beforeMethod in TestNG
        cy.clearAllCookies();


    })

    after(() => {

        // similar to afterClass in TestNG runs once after all tests finished 
    })

    afterEach(() => {


        // similar to beforeEach


    })




    it('Opening a web application', () => {

        cy.visit('/registration_form');
        cy.get(':nth-child(10) > a').click();



    })

    it('Test2', () => {

        expect(false).to.equal(false);

    })


    it('Test3', () => {

        expect(false).not.to.equal(false);

    })

    it('Test4', () => {

        expect(5).to.equal(5);

    })

    it('Test4', () => {

        expect(5).to.equal('5'==5);

    })




})