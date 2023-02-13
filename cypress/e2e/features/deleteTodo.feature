Feature: Delete Todo
Check if the user is able to delete an existing todo clicking on the trash button at right side of todo

    Scenario: Should delete the todo
    Given Must start with an existing Todo
    When User click on the todo trash-button on right
    Then The todo should disappear from the screen