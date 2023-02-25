import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils();

Given("Must start with an existing Todo", function () {
  cy.visit("/");
  E2Eutils.clear();
  E2Eutils.todoSample("TodoSample");
});

When("User click on the todo trash-button on right", () => {
  cy.get('[data-cy="delete"]').click();
});

Then("The todo should disappear from the screen", () => {
  cy.get(".todo").should("not.exist");
});
