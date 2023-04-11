Feature: User Registration
User should be able to create his own account

    Background: 
        Given User on signup page

    Scenario: Filling the form with no credentials should display error messages
    When User click on signup without filling the credentials
    Then Errors should display on screen

    Scenario: Filling the form with not valid credentials should display error messages
    When User fill the form with username 'asd' password 'asd' confirmPassword 'asd' and click on signup btn
    Then Error messages should be displayed

    Scenario: Filling Form with passwords that do not match
    When fill the form with username 'testUser123' password 'testPassword123' confirmPassword 'Password123' and click on signup btn
    Then This Error message 'Password & confirm password do not match' should be displayed

    Scenario: Creating an already existing User
    When User fill the form with an username that already exist and click signup btn
    Then Error message 'This user already exist' should be displayed

    Scenario: Filling the form and submitting redirect user into main and his username should be displayed in the header
    When User fill the form with username 'testUsername' password 'testPassword123' confirm Password 'testPassword123'
    And Click on Signup btn
    Then User should be into main app and 'testUsername' should be displayed into header