//import { Toverify } from "../utils/function";
//import { Tofillfoam } from "../utils/function";
//import { Forlogin } from "../utils/function";
//import { validation } from "../utils/function";

import {SomeFunctions} from "../utils/function"

describe("Functionst", () => {
    it("Testing", () => {
        cy.visit("https://www.demoblaze.com/");
    // For accessing text on the screen/page
    //Toverify()
    //Tofillfoam()
    //Forlogin()
    //validation()
    SomeFunctions.Toverify()
    SomeFunctions.Tofillfoam()
    SomeFunctions.Forlogin()
    SomeFunctions.validation()
        
    })

})
 