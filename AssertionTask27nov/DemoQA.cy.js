//beforeEach(() => {cy.visit("https://demoqa.com/");})
import { DemoNav } from "../../utils/demofunction";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
describe("Demo site test", () => {
  it("to verify that new user can enter new data in table", () => {
    cy.visit("https://demoqa.com/");
    cy.url().should("include", "demo");
    cy.scrollTo("center");
    cy.wait(3000);
    cy.get(DemoNav.toclickonElement).eq(0).should("have.class", "card mt-4 top-card").click();
    cy.get(DemoNav.toclickwebpage).eq(3).click();
    cy.get(DemoNav.toclickonadd).should("have.id", "addNewRecordButton").click();
    cy.wait(5000);
    cy.get(DemoNav.toenterfirstname).type("Abdullah").should("have.value", "Abdullah");
    cy.get(DemoNav.toenterLastname).type("Khizar").should("have.value", "Khizar");
    cy.get(DemoNav.toenterEmail).type("Abdullahkhizar@gmail.com").should("have.value", "Abdullahkhizar@gmail.com");
    cy.get(DemoNav.toenterAge).type("21").should("have.value", "21");
    cy.get(DemoNav.toentersalary).type("1111").should("have.value", "1111");
    cy.get(DemoNav.toenterDeprt).type("QA Automation").should("have.value", "QA Automation");
    cy.get(DemoNav.toentersummit).should("have.id", "submit").click();
  });

  it("Verift that the user can edit", () => {
    cy.visit("https://demoqa.com/");
    cy.get(DemoNav.toclickonElement).eq(0).should("have.class", "card mt-4 top-card").click();
    cy.get('[id="item-3"]').should("be.visible").and("have.id", "item-3");
    cy.get(DemoNav.toclickwebpage).eq(3).click();
    cy.scrollTo("center");
    cy.get(DemoNav.forEditing).should("have.id", "edit-record-2").click();
    cy.get(DemoNav.toenterfirstname).should("have.value", "Alden").clear().type("Completed").wait(2000).should("have.value", "Completed");
    cy.get(DemoNav.toenterLastname).should("have.value", "Cantrell").clear().type("BV").wait(2000).should("have.value", "BV");
    //cy.get("#submit").should('be.visible');
    cy.get(DemoNav.tosummitEdit).should("have.id", "submit").click();
  });
});
