describe("Test project", () => {
  it("display the item list", () => {
    cy.visit("https://www.demoblaze.com/");
    // For accessing text on the screen/page
    cy.contains('CATEGORIES').should('be.visible')

    // Get the element using css locator
    cy.get('[class="nav-link"]').eq(0).should('be.visible')

    // to get the element and click
    cy.get('[class="list-group-item"]').eq(1).should('be.visible').click().wait(1000)
    cy.get('[class="list-group-item"]').eq(2).should('be.visible').click().wait(1000)
    cy.get('[class="list-group-item"]').eq(3).should('be.visible').click().wait(1000)
    cy.get('[class="nav-link"]').eq(2).should('be.visible')
    cy.get('[class="nav-link"]').eq(1).should('be.visible').click()
    cy.wait(1000)
    //Cy.wait is used to take a break or wait 
    // .tyoe is used to type in the input field
    // .eq is used to select the specific objet number 
    // .click is used to click in the button
    cy.get('[id="recipient-email"]').type('Abdullahkhizar')
    cy.get('[id="recipient-name"]').type('AbDua11k')
    cy.get('[id="message-text"]').type('This foam is no working as required')
    cy.get('[type="button"]').eq(2).click()
    cy.get('[class="nav-link"]').eq(2).click()
    cy.wait(1000)
    cy.get('[type="button"]').eq(24).click()    
    cy.get('[class="nav-link"]').eq(3).click()
    cy.get('[type="button"]').eq(29).click()
    cy.get('[type="text"]').eq(3).type('12ss')
    cy.get('[type="text"]').eq(4).type('Pakisatn1')
    cy.get('[type="text"]').eq(5).type('LahorE')
    cy.get('[type="text"]').eq(6).type('222311`31-213')
    cy.get('[type="text"]').eq(7).type('jan')
    cy.get('[type="text"]').eq(8).type('20010w')
    cy.get('[type="button"]').eq(8).click()
    cy.wait(3000)
    cy.get('[class="confirm btn btn-lg btn-primary"]').click()
    
   });

   it('check the all side', () => {
   cy.visit("https://www.demoblaze.com/");
   cy.contains('PRODUCT STORE').should('be.visible')
   cy.get('[class="carousel-control-next-icon"]').click().wait(2000)
   cy.get('[class="carousel-control-next-icon"]').click().wait(2000)
   cy.get('[class="carousel-control-next-icon"]').click().wait(2000)

   })
   //This test case is for adding item in the cart and place an order
   //To get the href link we used 'a'  
   // .contains select he firs element & th .should is used to validate.
   it('to check that item selected in cart',() => {
   cy.visit("https://www.demoblaze.com/");
   cy.contains('PRODUCT STORE').should('be.visible')
   cy.get('a[href="prod.html?idp_=1"]').eq(0).click()
   cy.wait(2000)
   cy.get('a[href="#"]').eq(6).click()
   cy.wait(2000)
    //cy.on('window:alert',(str) =>
    //{
    //expect(str).to.equal('Product added.')
    //})
   cy.get('a[href="cart.html"]').click().wait(4000)
   cy.get('[type="button"]').eq(29).click()
   cy.get('[type="text"]').eq(3).type('Abdullah')
   cy.get('[type="text"]').eq(4).type('Pak')
   cy.get('[type="text"]').eq(5).type('lhr')
   cy.get('[type="text"]').eq(6).type('112223e')
   cy.get('[type="text"]').eq(7).type('jan')
   cy.get('[type="text"]').eq(8).type('20000')
   cy.get('[class="btn btn-primary"]').eq(2).click()

   })

   it ('for login,and logout',() => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.get('a[href="#"]').eq(2).click()
    cy.wait(1000)
    cy.get('[type="text"]').eq(3).type('Alitest@gmail.com')
    cy.get('[type="password"]').eq(1).type('Password@123')
    cy.get('[class="btn btn-primary"]').eq(2).click()
    cy.wait(4000)
    cy.get('[class="nav-link"]').eq(5).click()

   })

   it('to check next and previous button working',() => {
    cy.visit("https://www.demoblaze.com/index.html");
    cy.wait(2000)
    // .ScrollTo is used to scroll in the page 
    cy.scrollTo('center')
    cy.wait(2000)
    cy.scrollTo('bottom')
    cy.wait(3000)
    cy.contains('Next').should('be.visible')
    cy.get('[class="page-link"]').eq(1).click()
    cy.scrollTo('center').wait(2000).scrollTo('top')

   })

   
});


  