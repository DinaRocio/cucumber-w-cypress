Feature: Mobile Element Test

  Scenario: Verify the existence of an element in mobile view
    Given I am on the main page
    When I switch to mobile view
    Then I should see the hamburger icon

  Scenario: Display the 4 menu items when clicking the hamburger icon
    Given I am on the main page
        When I switch to mobile view
    When I click the hamburger icon
    Then I should see the hamburger menu with the following items:
      | Acerca    |
      | Servicios |
      | Proyectos |
      | Acerca  |