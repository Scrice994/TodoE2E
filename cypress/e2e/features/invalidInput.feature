Feature: display red paragraph for invalid input
if the user try to create an empty todo a red paragraph should display
saying that the input field is empty and the todo should not be created

    Scenario: try to create an empty todo
    Given user start with empty todolist
    When User click on + button addTodoWindow should display
    And User click on create task! button with a empty input field 
    Then a rep paragraph saying: "The task can't be empty!" should display below the input field
    And todolist must be empty