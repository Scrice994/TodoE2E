Feature: clicking yes in warning modal
should remove all todos in the list and close the warning modal

    Scenario: should delete all todos
    Given App with a list of 5 todos
    When user click on remove-list icon
    And click yes button on the warning modal
    Then all todos should be deleted and warning modal should be closed