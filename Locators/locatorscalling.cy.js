import { loginPageselector } from "../../utils/Locators";

describe("Functionst", () => {
  it("Testing", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.get(loginPageselector.forlogin).eq(2).click();
    cy.wait(3000);
    cy.get(loginPageselector.toEnterEmail).type("Alitest@gmail.com");
    cy.get(loginPageselector.toEnterPassword).type("Password@123");
    cy.wait(3000)
    cy.get(loginPageselector.topressLogin).eq(2).click();
  });
});
