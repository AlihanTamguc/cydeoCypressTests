/// <reference types="cypress" />

describe("Context : My First Tests", () => {
  beforeEach(() => {
    // runs before each test case, beforeMethod in TestNG
    cy.clearAllCookies();
    cy.visit("/login");
  });

  it("Check different locators strategies", () => {
    // By CSS locator
    cy.get("input[name='username']").type("CydeoStudent"); // every statement  creates an object to be interacted,
    // and next command makes operation to the object created at the previous statement
    // attribute name and value
    cy.get("[type='text']").clear(); // clear what is typed

    // tagName
    cy.get("input").each((item, index, list) => {
      // assert the length of the list is 2

      expect(list).to.have.length(2);
      expect(item).to.have.attr("type");
    });

    // by attribute name

    cy.get("[type]");

    // by className  // put a dot for the space

    cy.get(".btn.btn-primary");

    // By id

    cy.get("#wooden_spoon");

    // if I want to use text : no xpath in cypress, but it is still possible

    cy.get("button").should("contain", "Login").click();
  });

  it("Check finding elements by traveling through DOM", () => {
    // travel to find the login button   : locate ysername box - go to parent from -then find button

    cy.get('input[name="username"]')
      .parents("form")
      .find("button")
      .should("contain", "Login")
      .click();
  });

  it.only("Check finding elements by traveling through DOM", () => {
    // Cypress itself bundles assertions provided by Chai, Sinon, and jQuery

    cy.get("button")
      .should("have.attr", "id")
      .should("contain", "wooden_spoon");

    cy.get("#wooden_spoon")
      .should("contain", "Login")
      .and("have.class", "btn btn-primary");

    // expect assertion: creates a subject of our test, then you implement different actions

    cy.get("#wooden_spoon").then((buttonElement) => {
      expect(buttonElement).to.have.text("Login");
      expect(buttonElement).to.have.class("btn btn-primary");
    });
  });
});
