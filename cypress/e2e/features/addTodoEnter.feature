Feature: Create Todo
  check if the user is able to create a new Todo using Enter and not click on + 
  button and on create task button

  Scenario: Should Create a new Todo
    Given user is on the app page
    When user type Enter
    And user type "Take a coffee with my friends" in the input field and press enter
    Then a new todo with text "Take a coffee with my friends" should be in the screen