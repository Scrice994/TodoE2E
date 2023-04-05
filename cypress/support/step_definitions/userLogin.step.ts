import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Given("User on login page", () => {
    cy.visit("/login")
})

When("user click login btn", () => {
    cy.get('[data-cy="login-btn"]').click()
})

Then("error messages should display", () => {
    cy.get('[data-cy="login-username-error"]').should('have.text', 'Username is required')
    cy.get('[data-cy="login-password-error"]').should('have.text', 'Password is required')
})

When("user fill the form but the credentials don't match any user", () => {
    cy.get('[data-cy="login-username"]').type('testUser')
    cy.get('[data-cy="login-password"]').type('testUser123')
    cy.get('[data-cy="login-btn"]').click()
})

Then("a error message on top should display", () => {
    cy.get('[data-cy="credential-error"]').should('have.text', 'Wrong credentials')
})

When("user fill the form with username {string} password {string} and click login btn", (username: string, password: string) => {
    cy.request('POST', 'http://localhost:3005/user/signup', {username: 'testUser123', password: 'testPassword123'})
    cy.get('[data-cy="login-username"]').type(username)
    cy.get('[data-cy="login-password"]').type(password)
    cy.get('[data-cy="login-btn"]').click()       
})

Then("should be redirected into main app", () => {
    cy.url().should('include', '/')
    cy.get('[data-cy="header"]').should('have.text', `Welcome testUser123, Your tasks are:`)
})

