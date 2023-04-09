Feature: Create Todo
  check if the user is able to create a new Todo and add it to the list

  Background:
    Given user on the app page

    Scenario: try to create an empty todo
    When User click on + button addTodoWindow should display
    And User click on create task! button with a empty input field 
    Then a rep paragraph saying: "The task field can't be empty" should display below the input field
    And todolist must be empty

    Scenario: Should Create a new Todo
    When user click the + button
    And user type "Go to the gym" in the input field
    And user click Create task! button
    Then a todo with text "Go to the gym" should be in the screen
