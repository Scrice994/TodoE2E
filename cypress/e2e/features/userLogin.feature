Feature: User should be able to login if they have already an account

    Background:
        Given User on login page

    Scenario: User try to login without fill the credentials
        When user click login btn
        Then error messages should display
    
    Scenario: User try to login but username and password match no saved user
        When user fill the form but the credentials don't match any user
        Then a error message on top should display

    Scenario: User should be able to login if insert right credentials and click login
        When user fill the form with username 'testUser123' password 'testPassword123' and click login btn
        Then should be redirected into main app