import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils();

Given("user on the app page", function () {
  cy.visit("/");
  E2Eutils.clear();
});

When("user click the + button", () => {
  cy.get('[data-cy="+"]').click();
});

When("user type {string} in the input field", (todoText: string) => {
  cy.get('[data-cy="text-input"]').type(todoText);
});

When("user click Create task! button", () => {
  cy.get('[data-cy="create-task"]').click();
});

Then(
  "a todo with text {string} should be in the screen",
  (todoText: string) => {
    cy.get('[data-cy="todo"]').should('have.text', todoText);
  }
);

// import {Given, When, Then} from '../common'

// class Stepdefs {
//   @Given('/')
//   todayIsSunday() {
//     return "pending"
//     // preparo le precondizioni per eseguire il test
//   }

// }
