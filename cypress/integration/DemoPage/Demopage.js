import TestData from "../../fixtures/TestData/testData";
import { LandingPageElements } from "../../Pages/LandingPage/LandingPageElements";
import landingPageFucntions from "../../Pages/LandingPage/LandingPageFunctions";

const testData = new TestData();


beforeEach(()=> {
    cy.viewport(Cypress.env('viewportHorizontal'),Cypress.env('viewportVertical'));
});

Given('User launch the application', ()=> {
    //cy.viewport(1366,768);
    cy.visit('/');
    cy.xpath(LandingPageElements.landingPageLogo).should('be.visible');
});

Then('Page title {string} is displayed', (pageTitle)=> {
    let demoPageTitle = pageTitle;
    cy.title().should('eq', demoPageTitle);
    
});

And('Page title contains {string} keyword', (pageTitleKeyword)=> {
    let reqPageTitleKeyword = pageTitleKeyword;
    cy.title().should('include', reqPageTitleKeyword);
});

Then('Logo is visible on application landing page', ()=>{
    cy.xpath(LandingPageElements.landingPageLogo).should('be.visible');
    //cy.xpath('//header//img[@class="logoClass"]').should('be.visible');
});

Then('On landing page {string} text is visible', (PageHeaderText)=> {
    let reqPageHeaderText = PageHeaderText;
    //cy.xpath('//body//h1[text()="Practice Page"]').should('have.text',reqPageHeaderText);
});

When(/^User click on first radio button as (.*) value associated it$/, (radioBtnText)=> {
    //let ReqRadioBtnWithText = Cypress._.camelCase(Radio1).toLowerCase().trim();
    let ReqRadioBtnWithText = radioBtnText;
    cy.log(ReqRadioBtnWithText)
    cy.xpath('//label[@for='+ReqRadioBtnWithText+']/input').check({force:true});
   
});

Then(/^The radio button as (.*) value associated it is clicked$/, (radioBtnText)=> {
    let ReqRadioBtnWithText = radioBtnText;
    cy.xpath('//label[@for='+ReqRadioBtnWithText+']/input').should("be.checked");
});

When(/^User click on first radio button as (.*) value associated it$/, (radioBtnText)=> {
    let ReqRadioBtnWithText = radioBtnText;
    cy.xpath('//label[@for='+ReqRadioBtnWithText+']/input').check({force:true});
    cy.xpath('//label[@for='+ReqRadioBtnWithText+']/input').should("be.checked");
});

And(/^The radio button as (.*) and (.*) are not selected$/, (radioBtnText1,radioBtnText3)=> {
    let ReqRadioBtnWithText1 = radioBtnText1;
    let ReqRadioBtnWithText3 = radioBtnText3;
    cy.xpath('//label[@for='+ReqRadioBtnWithText1+']/input').should("not.be.checked");
    cy.xpath('//label[@for='+ReqRadioBtnWithText3+']/input').should("not.be.checked");
});

When('User select value {string} form drop dropdown', (dropdownValue)=> {
    let OptionText = dropdownValue;
    cy.log(OptionText);
    cy.xpath(LandingPageElements.dropdownElement).select(OptionText);
});

Then('Value form dropdown as {string} is selected', (dropdownValue)=> {
    let OptionText = dropdownValue;
    cy.xpath(LandingPageElements.dropdownElement).find(":selected").contains(OptionText);
});

When('User enter the keyword {string} in dynamic drop down', (countryName)=>{
    let countryNameText = countryName;
    cy.xpath(LandingPageElements.autoCompleteTextElement).type(countryNameText);
});

Then('Value as {string} is get displayed as suggestion', (countryNameSuggestion)=> {
    let countryNameSuggestionText = countryNameSuggestion;
    //cy.xpath("//input[@id='autocomplete']").should("contains.text",countryNameSuggestionText);
    //cy.xpath("//li[@class='ui-menu-item']/div[text()="+countryNameSuggestionText+"]").should("contains.text",countryNameSuggestionText);
    cy.xpath(LandingPageElements.suggestionTextElement).should("contains.text",countryNameSuggestionText);
});


When('Alert button is visible on the page', ()=> {
    cy.xpath(LandingPageElements.alertButton).should('be.visible');
});

Then('Alert generated with text {string} on it', (textformAlert)=> {
    let alertText = textformAlert;
    cy.on('window:alert', function(textFormAlert){
        expect(textFormAlert).eq(alertText);
    });
    cy.xpath(LandingPageElements.alertButton).click();
});

When('Open Window button is visible on the page', ()=> {
    cy.get(LandingPageElements.newWindowButtonElement).should('be.visible');
});

Then('Child window is opened after user click on open window button', ()=> {
    const windowPopupUrl = testData.winPopupUrl;    
    //const windowPopupUrl = "http://www.qaclickacademy.com/";
        cy.window().then(window =>{
        const stub = cy.stub(window,'open').as('windowopen')
    });
        cy.xpath('//button[@id="openwindow"]').click()
        cy.get('@windowopen').should('be.calledWith',windowPopupUrl)
        
        cy.window().then(win =>{
        win.location.href = windowPopupUrl
        cy.title().should('eq',testData.windowNewPageTitle)
        });
});

When('Data table with {string} header text is displayed', (tableName)=> {
    let tableNameText = tableName;
    cy.xpath(LandingPageElements.fixedDataTableHeader).should("contains.text",tableNameText);
});

Then('The data table headers column names as below is displayed', (webtableColumnNames)=> {
    webtableColumnNames.hashes().forEach(element => {
        // cy.xpath(LandingPageElements.fixedDataTableColumns1).should("contains.text",element.columnOneName);
        // cy.xpath(LandingPageElements.fixedDataTableColumns2).should("contains.text",element.columnTwoName);
        // cy.xpath(LandingPageElements.fixedDataTableColumns3).should("contains.text",element.columnThreeName);
        // cy.xpath(LandingPageElements.fixedDataTableColumns4).should("contains.text",element.columnFourName);
        landingPageFucntions.validateTableHeaderColmuns(element.columnOneName, element.columnTwoName, element.columnThreeName, element.columnFourName);
    })
});


When ('Application header is displayed', ()=> {
    cy.xpath(LandingPageElements.landingPageHeader).should('be.visible');
});

And ('Dyanmic search box is visible', ()=> {
    cy.xpath(LandingPageElements.autoCompleteTextElement).should('be.visible');
});

Then (/^user type (.*) in search box$/, (partialCountryName)=> {
    let parCountryName = partialCountryName;
    cy.log("Searching for Country Name - " + parCountryName);
    cy.xpath(LandingPageElements.autoCompleteTextElement).type(parCountryName);
});

And (/^user get the (.*) result form search box$/, (completeCountyName)=> {
    let comCountyName = completeCountyName;
    cy.xpath(LandingPageElements.suggestionTextElement).should("contains.text",comCountyName);
});