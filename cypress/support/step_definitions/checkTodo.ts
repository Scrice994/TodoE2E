import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "./testUtils";

const E2Eutils = new TestUtils()

Given("Start with an existing Todo", function () {
  cy.visit('/')
  E2Eutils.clear()
  E2Eutils.todoSample('TodoSample')
});

When("User click on the todo left button", () => {
  cy.get('.checkbox').click()
})

Then("Checked state should appear in the todo left button", () => {
  cy.get('.checkbox-checked').should('be.visible')
})
