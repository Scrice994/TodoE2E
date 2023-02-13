Feature: Load todos
Should load saved todos when refresh the page

    Scenario: Load saved todos
    Given User Add new todo
    When User refresh the app
    Then The new todo should be in the screen
