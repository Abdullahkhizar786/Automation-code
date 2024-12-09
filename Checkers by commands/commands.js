// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --

// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("toFillFoam", (firstName, lastName, userEmail, age, salary, department) => {
  cy.get("#firstName").type(firstName);
  cy.get("#lastName").type(lastName);
  cy.get("#userEmail").type(userEmail);
  cy.get("#age").type(age);
  cy.get("#salary").type(salary);
  cy.get("#department").type(department);
  cy.get("#submit").click();
});

require("@4tw/cypress-drag-drop");


Cypress.Commands.add("move",(click , drop) => {
 
    cy.get(`[name="space${click}"]`).click()
    cy.get(`[name="space${click}"]`).should('be.visible').and("have.attr", "src", "you2.gif")
    cy.get(`[name="space${drop}"]`).click()
    // cy.get(`[name="space${drop}"]`).should('be.visible')

    cy.wait(4000)
        
 })
