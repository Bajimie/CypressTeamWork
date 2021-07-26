import LandingPage from "../pageObjects/LandingPage";


const landingPage = new LandingPage();



Cypress.Commands.add('AssertLoginWrongDetails', () => {

  //Assert Error
  landingPage.getError().should("be.visible");

})