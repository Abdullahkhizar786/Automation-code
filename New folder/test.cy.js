function steps(){
    cy.contains('CATEGORIES').should('be.visible')

    // Get the element using css locator
    cy.get('[class="nav-link"]').eq(0).should('be.visible')

    // to get the element and click
    cy.get('[class="list-group-item"]').eq(1).should('be.visible').click().wait(1000)
    cy.get('[class="list-group-item"]').eq(2).should('be.visible').click().wait(1000)
    cy.get('[class="list-group-item"]').eq(3).should('be.visible').click().wait(1000)
    cy.get('[class="nav-link"]').eq(2).should('be.visible')
    cy.get('[class="nav-link"]').eq(1).should('be.visible').click()
}


describe("Functionst", () => {
    it("Testing", () => {
        cy.visit("https://www.demoblaze.com/");
    // For accessing text on the screen/page
    steps()
    })
})