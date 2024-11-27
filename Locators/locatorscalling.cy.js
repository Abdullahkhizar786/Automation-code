import { loginPageselector } from "../../utils/Locators";
import { addinginfo } from "../../utils/Locators";
beforeEach(() => {
  cy.visit("https://www.demoblaze.com/");
});
describe("Functionst", () => {
  it("Testing", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get(loginPageselector.forlogin).eq(2).click();
    cy.wait(3000);
    cy.get(loginPageselector.toEnterEmail).type("Alitest@gmail.com");
    cy.get(loginPageselector.toEnterPassword).type("Password@123");
    cy.wait(3000);
    cy.get(loginPageselector.topressLogin).eq(2).click();
  });
  it("Entering cart info", () => {
    cy.get('a[href="cart.html"]').click().wait(4000);
    cy.get('[type="button"]').eq(29).click();
    cy.get(addinginfo.toentername).type("Abdullah");
    cy.get(addinginfo.toentercontry).type("Pak");
    cy.get(addinginfo.toentercity).type("lhr");
    cy.get(addinginfo.toentercard).type("112223e");
    cy.get(addinginfo.toentermonth).type("jan");
    cy.get(addinginfo.toenteryear).type("20000");
    cy.get('[class="btn btn-primary"]').eq(2).click();
  });
});
