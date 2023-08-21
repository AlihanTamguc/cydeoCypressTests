/// <reference types="cypress" />

describe("Cypress File Upload Tests", () => {
  /**
   * in order to upload files in Cypress we need to install plugin
   * we will rung following command:
   * npm install -dev cypress-file-upload
   *
   * we need to import
   *
   * in our support folder we have commands.js file : good place for utlility functions
   * import 'cypress-file-upload'; code added in commands file
   *
   * The file that you want to upload should be in your fixture folder
   */

  beforeEach("Navigate to upload page ", () => {
    // runs before each test case, beforeMethod in TestNG
    cy.clearAllCookies();
    cy.visit("/upload");
  });

  it("Check upload action", () => {
    cy.get("input#file-upload").attachFile("pic.jpeg");
    cy.get("#file-submit").click();
    // assert that path message is displayed

    cy.get("#uploaded-files").then(() => {
      cy.contains("pic.jpeg").should("be.visible");
    });
  });
});
