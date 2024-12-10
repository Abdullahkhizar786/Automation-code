import { Flightlocators } from "../../utils/FlightNetwork";
beforeEach(() => {
  cy.viewport(1280, 720);
});
beforeEach(() => {
  cy.visit("https://www.flightnetwork.com/", {
    headers: {
      Accept: "application/json, text/plain, */*",
      "user-Agent": "axios/0.18.0",
    },
  });
});
describe("Test case for Flight Network", () => {
  it("verify that user can enter valid email", () => {
    cy.get(Flightlocators.toacceptc).click();
    cy.get(Flightlocators.toclickonBokings).eq(0).click();
    cy.get(Flightlocators.toSigninGoogle).click();
  });
  it("to check that flight modules worked", () => {
    cy.get(Flightlocators.toacceptc).click();
    cy.get(Flightlocators.toclickonFlight).click().wait(3000);
    cy.get('[class="_1tsyql10 ioeri023 ioeri02v"]').should("be.visible");
    cy.get(Flightlocators.toclickonway).eq(1).click().wait(3000);
    cy.get(Flightlocators.toclickmulticity).eq(2).click().wait(3000);
    cy.get('[class="b0x94f6 b0x94f0 b0x94f4 css-p2l5xt"]').should("be.visible");
  });
  it.only("to verify the search option", () => {
    cy.get(Flightlocators.toacceptc).click();
    cy.wait(2000);
    cy.get(Flightlocators.toclickonfrom).type("Laho").wait(2000);
    cy.get(Flightlocators.toclicklahore).click();
    cy.get(Flightlocators.toclickto).eq(1).type("kara").wait(3000);
    cy.get(Flightlocators.toclickKarachi).eq(0).click();
    cy.get(Flightlocators.toclickDeprt).eq(0).click().wait(3000).wait(3000);
    cy.get(Flightlocators.topickDdate).should("be.visible").trigger("click").wait(3000);
    cy.get(Flightlocators.topickRdate).should("be.visible").trigger("click").wait(2000);
    cy.get(Flightlocators.toselectPass).click();
    cy.get(Flightlocators.toselectAdult).eq(0).click();
    cy.get(Flightlocators.toselectChild).eq(1).click().wait(2000).click();
    cy.get(Flightlocators.toselectClass).click().wait(1000);
    cy.contains("Premium").should("be.visible").click();
    cy.get(Flightlocators.toclickSearch).click();
    cy.scrollTo("top").wait(3000);
  });
  it("to check one way-flight", () => {
    cy.url().should("contain", "flight");
    cy.get(Flightlocators.toacceptc).click();
    cy.get(Flightlocators.toclickonway).eq(1).click();
    cy.get(Flightlocators.toclickonfrom).should("be.visible").type("Laho").wait(2000);
    cy.get(Flightlocators.toclicklahore).click();
    cy.get(Flightlocators.toclickonfrom).should("have.text", "Lahore");
    cy.get(Flightlocators.toclickto).should("be.visible").eq(1).type("kara").wait(3000);
    cy.get(Flightlocators.toclickKarachi).eq(0).click();
    cy.get(Flightlocators.toclickto).eq(1).should("have.text", "Karachi");
    cy.get('[class="css-exsbnd"]').should("have.class", "css-exsbnd").click().wait(1000);
    cy.get('[data-testid="children-passengers-add"]').click().wait(2000).click();
    cy.get('[class="_1l9hnubc _1l9hnubb"]').should("have.class", "_1l9hnubc _1l9hnubb").click().wait(1000);
    cy.contains("Premium").should("be.visible").click();
    cy.get('[class="b0x94f5 b0x94f0 b0x94f3 css-zchx5o"]').click();
    cy.scrollTo("top").wait(3000);
  });
});
