Feature: warning modal behavior
clicking the remove list icon should open the warning modal, when the modal is open
user can't check, delete, add todos and when the modal No button is clicked
the warning modal should close. If yes button is clicked instead all todo should be removed


    Scenario: warning modal behavior
    Given User start with a list of 1 todo
    When User click on remove list icon 
    Then warning modal should be in the screen
    And clicking on check Todo should do nothing
    And clicking on delete Todo should do nothing
    And clicking on Add Todo should do nothing
    And clicking No button should close warning modal

    Scenario: should delete all todos
    Given App with a list of 5 todos
    When user click on remove-list icon
    And click yes button on the warning modal
    Then all todos should be deleted and warning modal should be closed
