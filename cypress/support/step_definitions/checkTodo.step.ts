import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils();

Given("Start with an existing Todo", function () {
  E2ETestUtils.createUserAndLogin()
  cy.visit("/");
  E2ETestUtils.todoSample("TodoSample");
});

When("User click on the todo left button", () => {
  cy.get('[data-cy="check-btn"]').click();
});

Then("Checked state should appear in the todo left button", () => {
  cy.get('[data-cy="check"]').should("be.visible");
  cy.get('[data-cy="check-background"]').should("be.visible");
});
