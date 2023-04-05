import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils();

Given("Must start with an existing Todo", function () {
  E2ETestUtils.createUserAndLogin()
  cy.visit("/");
  E2ETestUtils.todoSample("TodoSample");
});

When("User click on the todo trash-button on right", () => {
  cy.get('[data-cy="delete"]').click();
});

Then("The todo should disappear from the screen", () => {
  cy.get('[data-cy="todo"]').should("not.exist");
});
