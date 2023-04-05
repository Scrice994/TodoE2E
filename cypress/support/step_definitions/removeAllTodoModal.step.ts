import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2ETestUtils = new TestUtils();

Given("User start with a list of 1 todo", () => {
    E2ETestUtils.createUserAndLogin()
    cy.visit("/");
    E2ETestUtils.todoSample("TodoSample");
})

When("User click on remove list icon", () => {
    cy.get('[data-cy="remove-list"]').click()
})

Then("warning modal should be in the screen", () => {
    cy.get('[data-cy="warning-modal"]').should('be.visible')
    cy.get('[data-cy="warning-modal"]').should('exist')
})

Then("clicking on check Todo should do nothing", () => {{
    cy.get('[data-cy="check-btn"]').click({force: true})
    cy.get('[data-cy="check"]').should("not.exist");
    cy.get('[data-cy="check-background"]').should("not.exist");
}})

Then("clicking on delete Todo should do nothing", () => {
    cy.get('[data-cy="delete"]').click({force: true});
    cy.get('[data-cy="todo"]').should("exist");
})

Then("clicking on Add Todo should do nothing", () => {
    cy.get('[data-cy="+"]').click({force: true});
    cy.get('[data-cy="+"]').type("{enter}");
    cy.get('[data-cy="add-modal"]').should("not.exist")
})

Then("clicking No button should close warning modal", () => {
    cy.get('[data-cy="modal-no-btn"]').click({force: true});
    cy.get('[data-cy="warning-modal"]').should('not.exist')
})

Given("App with a list of 5 todos", () => {
    E2ETestUtils.createUserAndLogin()
    cy.visit("/");
    E2ETestUtils.todoSample("TodoSample");
    E2ETestUtils.todoSample("TodoSample2");
    E2ETestUtils.todoSample("TodoSample3");
    E2ETestUtils.todoSample("TodoSample4");
    E2ETestUtils.todoSample("TodoSample5");
})

When("user click on remove-list icon", () => {
    cy.get('[data-cy="remove-list"]').click()
    cy.get('[data-cy="warning-modal"]').should('be.visible')
    cy.get('[data-cy="warning-modal"]').should('exist')
})

When("click yes button on the warning modal", () => {
    cy.get('[data-cy="modal-yes-btn"]').click({force: true});
})

Then("all todos should be deleted and warning modal should be closed", () => {
    cy.get('[data-cy="todo"]').should('not.exist')
    cy.get('[data-cy="warning-modal"]').should('not.exist')
})