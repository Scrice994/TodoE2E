import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils()

Given("user on the app page", function () {
  E2ETestUtils.createUserAndLogin()
  cy.visit("/");
});

When("User click on + button addTodoWindow should display", () => {
  cy.get('[data-cy="+"]').click();
})

When("User click on create task! button with a empty input field", () => {
  cy.get('[data-cy="create-task"]').click();
})

Then("a rep paragraph saying: {string} should display below the input field", (label: string) => {
  cy.get('[data-cy="empty-input-msg"]').should("have.text", label)
})

Then("todolist must be empty", () => {
  cy.get('[data-cy="todo"]').should("have.length", 0)
})

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
