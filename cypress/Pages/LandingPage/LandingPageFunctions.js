import { LandingPageElements } from "../../Pages/LandingPage/LandingPageElements";

class LandingPageFunctions {

    validateTableHeaderColmuns(ColOneName, ColTwoName, ColThreeName, ColFourName)
    {
        cy.xpath(LandingPageElements.fixedDataTableColumns1).should("contains.text",ColOneName);
        cy.xpath(LandingPageElements.fixedDataTableColumns2).should("contains.text",ColTwoName);
        cy.xpath(LandingPageElements.fixedDataTableColumns3).should("contains.text",ColThreeName);
        cy.xpath(LandingPageElements.fixedDataTableColumns4).should("contains.text",ColFourName);
    }

}

export default new LandingPageFunctions();