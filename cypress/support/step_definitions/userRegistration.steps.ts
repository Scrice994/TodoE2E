import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(() => {
    cy.task('clearDB')
})

After(() => {
    cy.task('clearDB')
})

Given("User on signup page", () => {
    cy.visit("/login/Signup")
})

When("User click on signup without filling the credentials", () => {
    cy.get('[data-cy="form-submit-btn"]').click()
})

Then("Errors should display on screen", () => {
    cy.get('[data-cy="signup-username-error"]').should('have.text', 'Username is required')
    cy.get('[data-cy="signup-password-error"]').should('have.text', 'Password is required')
    cy.get('[data-cy="signup-confirmPassword-error"]').should('have.text', 'Confirm password is required')
})

When("User fill the form with username {string} password {string} confirmPassword {string} and click on signup btn", (username: string, password: string, confirmPassword: string) => {
    cy.get('[data-cy="signup-username"]').type(username)
    cy.get('[data-cy="signup-password"]').type(password)
    cy.get('[data-cy="signup-confirmPassword"]').type(confirmPassword)
    cy.get('[data-cy="form-submit-btn"]').click()
})

Then("Error messages should be displayed", () => {
    cy.get('[data-cy="signup-username-error"]').should('have.text', "Username can't contain special chars and its length must be between 4 and 20")
    cy.get('[data-cy="signup-password-error"]').should('have.text', "Password must contain at least 1 number, 1 letter and more than 6 chars")
})

When("fill the form with username {string} password {string} confirmPassword {string} and click on signup btn", (username: string, password: string, confirmPassword: string) => {
    cy.get('[data-cy="signup-username"]').type(username)
    cy.get('[data-cy="signup-password"]').type(password)
    cy.get('[data-cy="signup-confirmPassword"]').type(confirmPassword)
    cy.get('[data-cy="form-submit-btn"]').click()
})

Then("This Error message {string} should be displayed", (errorMessage: string) => {
    cy.get('[data-cy="signup-credentials-error"]').should('have.text', errorMessage)
})

When("User fill the form with an username that already exist and click signup btn", () => {
    cy.request('POST', 'http://localhost:3005/user/signup', {username: 'testUser123', password: 'testPassword123', confirmPassword: 'testPassword123'})
    cy.get('[data-cy="signup-username"]').type('testUser123')
    cy.get('[data-cy="signup-password"]').type('testPassword123')
    cy.get('[data-cy="signup-confirmPassword"]').type('testPassword123')
    cy.get('[data-cy="form-submit-btn"]').click()
})

Then("Error message {string} should be displayed", (errorMessage: string) => {
    cy.get('[data-cy="signup-credentials-error"]').should('have.text', errorMessage)
})

When("User fill the form with username {string} password {string} confirm Password {string}", (username: string, password: string, confirmPassword: string) => {
    cy.get('[data-cy="signup-username"]').type(username)
    cy.get('[data-cy="signup-password"]').type(password)
    cy.get('[data-cy="signup-confirmPassword"]').type(confirmPassword)
  })
  
When("Click on Signup btn", () => {
    cy.get('[data-cy="form-submit-btn"]').click()
  })
  
Then("User should be into main app and {string} should be displayed into header", (username: string) => {
    cy.url().should('include', '/')
    cy.get('[data-cy="header"]').should('have.text', `Welcome ${username}, Your tasks are:`)
  })