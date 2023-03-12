Feature: warning modal behavior
clicking the remove list icon should open the warning modal, when the modal is open
user can't check, delete, add todos and when the modal No button is clicked
the warning modal should close


    Scenario: warning modal behavior
    Given User start with a list of 1 todo
    When User click on remove list icon 
    Then warning modal should be in the screen
    And clicking on check Todo should do nothing
    And clicking on delete Todo should do nothing
    And clicking on Add Todo should do nothing
    And clicking No button should close warning modal
