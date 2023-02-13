Feature: Check Todo
Check if the user is able to check the todo by clicking at the empty-circle left button in the todo

    Scenario: Should check an existing Todo
    Given Start with an existing Todo
    When User click on the todo left button
    Then Checked state should appear in the todo left button
