Cypress.Commands.add('OpenUrl', (user) => {

    //Pick Url from environment
    cy.visit(Cypress.env("testUrl"));
  
  })