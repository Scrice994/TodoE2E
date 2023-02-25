import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils();

Given("User Add new todo", function () {
  cy.visit("/");
  E2Eutils.clear();
  E2Eutils.todoSample("TodoSample");
});

When("User refresh the app", () => {
  cy.reload();
});

Then("The new todo should be in the screen", () => {
  cy.get(".todo").should("exist");
});
