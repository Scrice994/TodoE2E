import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils();

Given("User start with a list of 1 todo", () => {
    cy.visit("/");
    E2Eutils.clear();
    E2Eutils.todoSample("TodoSample");
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