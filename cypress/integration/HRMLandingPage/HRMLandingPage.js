// import{
//     Given,
//     When
// } from "cypress-cucumber-preprocessor/steps";
Given('User Navigate Newtours application', ()=> {
    cy.visit('https://demo.guru99.com/test/newtours/index.php');
});

Then('User validates the page title',()=>{
    cy.url().should('eq','https://demo.guru99.com/test/newtours/index.php');
    cy.url().should('include','newtours');
})

Then('User validates the landing page URL',()=>{
    cy.title().should('eq','Welcome: Mercury Tours');
    cy.title().should('include','Welcome');
})

When('User Enter Valid {string} as username',(username)=>{
    cy.xpath('//input[@name="userName"]').type(username);
})

And('User Enter Valid {string} as password',(password)=>{
    cy.xpath('//input[@name="password"]').type(password);
})

And('Click On Login Button',()=>{
    cy.xpath('//input[@name="submit"]').click();
})

Then('User is able to login to the application',()=>{
    cy.url().should('eq','https://demo.guru99.com/test/newtours/login_sucess.php');
    cy.url().should('include','login_sucess');
})

And('Title of Page is {string}',(titleAfterLogin)=>{
    cy.title().should('eq',titleAfterLogin);
    cy.title().should('include','Login:');
})