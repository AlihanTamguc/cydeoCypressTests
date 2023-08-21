/// <reference types="cypress" />

describe("Web Table Tests", { baseUrl: "https://demoqa.com" }, () => {
  beforeEach("Navigate to upload page ", () => {
    // runs before each test case, beforeMethod in TestNG
    cy.clearAllCookies();
    cy.visit("/upload");
  });

  it("Check finding and editing a record", () => {
    // locate table body - then navigate through this element to find Alden, then update info with another person

    cy.get(".rt-tbody")
      .contains(".rt-tr-group", "Alden")
      .then((row) => {
        cy.wrap(row).find('[title="Edit"]').click();
        // fill in the box with new person

        cy.get("#firstName").clear().type("Harvey");
        cy.get("#lastName").clear().type("Specter");
        cy.get("#submit").click();
        cy.wrap(row).find(".rt-td").eq(0).should("contain", "Harvey");
        cy.wrap(row).find(".rt-td").eq(1).should("contain", "Specter");
      });
  });
});
