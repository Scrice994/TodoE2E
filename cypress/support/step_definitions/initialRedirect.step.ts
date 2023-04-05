import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("User open the page first time", function () {
  cy.visit("/")
});

Then("redirected to login page", () => {
    cy.url().should('include', '/login')
});

Given("User redirected on login page", () => {
  cy.visit("/login")
})

When("User click on signup button", () => {
  cy.get('[data-cy="signup-link"]').click()
})

Then("User should be redirected into signup page", () => {
  cy.url().should('include', '/login/Signup')
})

Given("User redirected on signup page", () => {
  cy.visit("/login/Signup")
})


