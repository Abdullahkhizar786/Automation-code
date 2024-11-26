class someFunctions {
  Toverify() {
    cy.contains("CATEGORIES").should("be.visible");

    // Get the element using css locator
    cy.get('[class="nav-link"]').eq(0).should("be.visible");

    // to get the element and click
    cy.get('[class="list-group-item"]').eq(1).should("be.visible").click().wait(1000);
    cy.get('[class="list-group-item"]').eq(2).should("be.visible").click().wait(1000);
    cy.get('[class="list-group-item"]').eq(3).should("be.visible").click().wait(1000);
    cy.get('[class="nav-link"]').eq(2).should("be.visible");
    cy.get('[class="nav-link"]').eq(1).should("be.visible").click();
  }


 Tofillfoam() {
  cy.get('[id="recipient-email"]').type("Abdullahkhizar");
  cy.get('[id="recipient-name"]').type("AbDua11k");
  cy.get('[id="message-text"]').type("This foam is no working as required");
  cy.get('[type="button"]').eq(2).click();
  cy.get('[class="nav-link"]').eq(2).click();
  cy.wait(1000);
  cy.get('[type="button"]').eq(24).click();
  cy.get('[class="nav-link"]').eq(3).click();
  cy.get('[type="button"]').eq(29).click();
  cy.get('[type="text"]').eq(3).type("12ss");
  cy.get('[type="text"]').eq(4).type("Pakisatn1");
  cy.get('[type="text"]').eq(5).type("LahorE");
  cy.get('[type="text"]').eq(6).type("222311`31-213");
  cy.get('[type="text"]').eq(7).type("jan");
  cy.get('[type="text"]').eq(8).type("20010w");
  cy.get('[type="button"]').eq(8).click();
  cy.wait(3000);
  cy.get('[class="confirm btn btn-lg btn-primary"]').click();
}


Forlogin() {
  cy.get('a[href="#"]').eq(2).click();
  cy.wait(1000);
  cy.get('[type="text"]').eq(3).type("Alitest@gmail.com");
  cy.get('[type="password"]').eq(1).type("Password@123");
  cy.get('[class="btn btn-primary"]').eq(2).click();
  cy.wait(4000);
  cy.get('[class="nav-link"]').eq(5).click();
}
validation() {
  cy.url().should("include", "demoblaze.com");
  cy.url().should("not.eq", "democvnsdj");
  cy.url().should("contain", "demoblaze");
  cy.wait(3000);
  cy.url().should("not.eq", "abdullah").should("contain", "demo");
  cy.title().should("contain", "STORE").and("eq", "STORE").and("not.eq", "ASDAS");

  cy.wait(2000);
  cy.get("#nava").should("be.visible").and("not.eq", "ASAD");
  cy.get("#cat").should("be.visible");
}

}
 
export const SomeFunctions = new someFunctions();
