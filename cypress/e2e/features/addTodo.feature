Feature: Create Todo
  check if the user is able to create a new Todo and add it to the list

  Scenario: Should Create a new Todo
    Given user on the app page
    When user click the + button
    And user type "Go to the gym" in the input field
    And user click Create task! button
    Then a todo with text "Go to the gym" should be in the screen
