import LandingPage from "../pageObjects/LandingPage";
import TestData from "../testData/TestData";

const landingPage = new LandingPage;
const td = new TestData;


Cypress.Commands.add('Login', (username, password) => {

  //Enter username
  landingPage.getUsername().type(username)

  //Enter password
  landingPage.getPassword().type(password)


  //Click login
  landingPage.getLogin().click()

})
Cypress.Commands.add('clearText', () => {

    //Enter username
    landingPage.getUsername().type('{selectall}{backspace}')
  
    //Enter password
    landingPage.getPassword().type('{selectall}{backspace}')
  
  
  })