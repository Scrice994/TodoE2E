import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils()

Given("user start with empty todolist", () => {
    cy.visit("/")
    E2Eutils.clear()
})

When("User click on + button addTodoWindow should display", () => {
    cy.get('[data-cy="+"]').click();
})

When("User click on create task! button with a empty input field", () => {
    cy.get('[data-cy="create-task"]').click();
})

Then("a rep paragraph saying: {string} should display below the input field", (label: string) => {
    cy.get("label").should("have.text", label)
})

Then("todolist must be empty", () => {
    cy.get('[data-cy="todo"]').should("have.length", 0)
})