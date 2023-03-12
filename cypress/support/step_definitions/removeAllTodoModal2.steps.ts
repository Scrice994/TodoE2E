import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { TestUtils } from "../testUtils";

const E2Eutils = new TestUtils();

Given("App with a list of 5 todos", () => {
    cy.visit("/");
    E2Eutils.clear();
    E2Eutils.todoSample("TodoSample");
    E2Eutils.todoSample("TodoSample2");
    E2Eutils.todoSample("TodoSample3");
    E2Eutils.todoSample("TodoSample4");
    E2Eutils.todoSample("TodoSample5");
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
