/// <reference types= "cypress" />
import TestData from "../testData/TestData"

const td = new TestData()
describe("Instagram Regression Test suite", function () {
  
  
    function openBrowser() {
      cy.OpenUrl({});
    }
    it('Validate that user with invalid details cannot login to the Instagram successfully', function () {
      //Open Instagram url
      openBrowser();
      //Login
      cy.Login(td.Username(), td.Password())
      cy.clearText()
      cy.Login(td.invalidUsername(), td.invalidPassword())
      
      //Assert login with wrong details.
      cy.AssertLoginWrongDetails({})
     });
  
  
  });
  