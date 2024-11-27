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
    cy.get(DemoNav.toclickonElement).eq(0).click();
    cy.get(DemoNav.toclickwebpage).eq(3).click();
    cy.get(DemoNav.toclickonadd).click();
    cy.wait(5000);
    cy.get(DemoNav.toenterfirstname).type("Abdullah");
    cy.get(DemoNav.toenterLastname).type("Khizar");
    cy.get(DemoNav.toenterEmail).type("Abdullahkhizar@gmail.com");
    cy.get(DemoNav.toenterAge).type("21");
    cy.get(DemoNav.toentersalary).type("1111");
    cy.get(DemoNav.toenterDeprt).type("QA Automation");
    cy.get(DemoNav.toentersummit).click();
  });
  it("Verift that the user can edit", () => {
    cy.visit("https://demoqa.com/");
    cy.get(DemoNav.toclickonElement).eq(0).click();
    cy.get('[id="item-3"]').should("be.visible");
    cy.get(DemoNav.toclickwebpage).eq(3).click();
    cy.scrollTo("center");
    cy.get(DemoNav.forEditing).click();
    cy.get(DemoNav.toenterfirstname).clear().type("Completed");
    cy.get(DemoNav.toenterLastname).clear().type("BV");
    cy.get("#submit").should("be.visible");
    cy.get(DemoNav.tosummitEdit).click();
  });
});
