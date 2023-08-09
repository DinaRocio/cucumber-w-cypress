Feature: Mobile Element Test

  Scenario: Verify the existence of an element in mobile view
    Given I am on the main page
    When I switch to mobile view
    Then I should see the hamburger icon