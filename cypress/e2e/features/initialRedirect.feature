Feature: Initial Redirect
if is the first time that the user visit the page should redirect him into the login/register page

    Scenario: should redirect user into /login page
    Given User open the page first time
    Then redirected to login page

    Scenario: clicking on signup btn should redirect to /signup page
    Given User redirected on login page
    When User click on signup button
    Then User should be redirected into signup page

