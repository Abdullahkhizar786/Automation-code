// import { M } from "../../utils/CheckersPoM";
describe("Checker game code", () => {
  it("Checkers game play", () => {
    cy.visit("https://www.gamesforthebrain.com/game/checkers/");
    cy.url().should("contain", "gamesforthebrain");
    cy.move("62", "73");
    cy.move("71", "62");
    cy.move("42", "53");
    cy.move("31", "42");
    cy.move("02", "13");
    cy.move("13", "04");
    cy.move("40", "31");
    cy.move("60", "71");
    cy.move("53", "35");
    cy.move("04", "15");
    cy.move("42", "53");
    cy.move("22", "13");
    cy.move("15", "26");
    cy.move("26", "37");
  });
});
