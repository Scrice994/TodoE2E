import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils();

Given("User Add new todo", function () {
  E2ETestUtils.createUserAndLogin()
  cy.visit("/");
  E2ETestUtils.todoSample("TodoSample");
});

When("User refresh the app", () => {
  cy.reload();
});

Then("The new todo should be in the screen", () => {
  cy.get('[data-cy="todo"]').should("exist");
});
