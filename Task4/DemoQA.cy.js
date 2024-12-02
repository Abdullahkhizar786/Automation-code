beforeEach(() => {
  cy.visit("https://demoqa.com/");
});
import { DemoNav } from "../../utils/demofunction";

describe("Demo site test", () => {
  it("to verify that new user can enter new data in table", () => {
    // cy.visit("https://demoqa.com/");
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
    // cy.visit("https://demoqa.com/");
    cy.get(DemoNav.toclickonElement).eq(0).should("have.class", "card mt-4 top-card").click();
    cy.get('[id="item-3"]').should("be.visible").and("have.id", "item-3");
    cy.get(DemoNav.toclickwebpage).eq(3).click();
    cy.scrollTo("center");
    cy.get(DemoNav.forEditing).should("have.id", "edit-record-2").click();
    cy.get(DemoNav.toenterfirstname).should("have.value", "Alden").clear().type("Completed").wait(2000).should("have.value", "Completed");
    cy.get(DemoNav.toenterLastname).should("have.value", "Cantrell").clear().type("BV").wait(2000).should("have.value", "BV");
    cy.get(DemoNav.tosummitEdit).should("have.id", "submit").click();
  });

  it("assertion in Broken image", () => {
    // cy.visit("https://demoqa.com/");
    cy.get(DemoNav.toclickonElement).eq(0).should("have.class", "card mt-4 top-card").click();
    cy.get(DemoNav.toclickonBrokenlinkimage).should("have.id", "item-6").click();
    cy.get('[src="/images/Toolsqa_1.jpg"]').should("be.visible").and("have.attr", "src", "/images/Toolsqa_1.jpg");
  });

  it("verify the user can summit foam", () => {
    // cy.visit("https://demoqa.com/");
    cy.get(DemoNav.toclickonFoam).eq(1).should("have.class", "card mt-4 top-card").click();
    cy.wait(2000);
    cy.get('[class="btn btn-light "]').eq(9).should("have.class", "btn btn-light").click();
    cy.get(DemoNav.toenterfirstname).type("Abdullah").should("have.value", "Abdullah");
    cy.get(DemoNav.toenterLastname).type("Khizar").should("have.value", "Khizar");
    cy.get(DemoNav.toenterEmail).type("Abdullahkhizar@gmail.com").should("have.value", "Abdullahkhizar@gmail.com");
    cy.get(DemoNav.toclickongenderbutton).eq(0).click();
    cy.get(DemoNav.toentermobileNum).type("123456789").should("have.value", "123456789");
    cy.get(DemoNav.toenterDOB).click().wait(2000);
    cy.wait(5000);
    cy.get(DemoNav.toclickinyear).select("2001");
    cy.get(DemoNav.toclickonmonth).select("January");
    cy.get(DemoNav.toclickonday).click();
    cy.scrollTo("center");
    cy.get(DemoNav.toentersubject).type("Math");
    cy.get('[id="react-select-2-option-0"]').click();
    cy.get(DemoNav.toselecthobbies).eq(4).click();
    cy.wait(2000);
    cy.get(DemoNav.touploadimage).click();
    cy.get('[class="form-control-file"]').selectFile("cypress/fixtures/img.png");
    cy.wait(3000);
    cy.get(DemoNav.toenteradress).type("Lahore").should("have.value", "Lahore");
    cy.get(DemoNav.toselectstate).eq(0).click().wait(2000);
    cy.get(DemoNav.toselectNCR).click();
    cy.get(DemoNav.toselectcity).click().wait(2000);
    cy.get(DemoNav.toselectDelhi).click();
    cy.get(DemoNav.toentersummit).should("have.id", "submit").click().wait(5000);
  });
});
