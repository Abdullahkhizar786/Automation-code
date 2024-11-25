describe("Assertion pratice", () => {
  //There are two types of assertion implicit & explicit
  // in implicit tow terms Should and And should is for valaditing and And is for such as or
  // .url with get the url of the page
  it("implicit Assertion shoud and", () => {
    cy.visit("https://www.demoblaze.com/");
    cy.url().should("include", "demoblaze.com");
    cy.url().should("not.eq", "democvnsdj");
    cy.url().should("contain", "demoblaze");

    cy.url().should("not.eq", "abdullah").should("contain", "demo");
    //.title will take the title of the page dom element first.
    cy.title()
      .should("contain", "STORE")
      .and("eq", "STORE")
      .and("not.eq", "ASDAS");
    cy.get("#nava").should("be.visible").and("not.eq", "ASAD");
    cy.get("#cat").should("be.visible");
  });
});
