import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils();

Given("user is on the app page", function () {
  E2ETestUtils.createUserAndLogin()
  cy.visit("/");
});

When("user type Enter", () => {
  cy.get('[data-cy="+"]').type("{enter}");
});

When(
  "user type {string} in the input field and press enter",
  (todoText: string) => {
    cy.get('[data-cy="text-input"]').type(`${todoText}{enter}`);
  }
);

Then(
  "a new todo with text {string} should be in the screen",
  (todoText: string) => {
    cy.get(`[data-cy="todo"]`).should('have.text', todoText);
  }
);
