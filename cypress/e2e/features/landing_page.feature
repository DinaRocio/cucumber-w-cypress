Feature: Landing page

    Menu bar must work properly

    Background:
        Given A web browser is at the sunnyside landing page
    Scenario: Hace click en acerca de
        When A user clicks on the about button
        Then The about section is displayed
    Scenario: Hace click en servicios
        When A user clicks on the services button
        Then The services section is displayed
    Scenario: Hace click en Proyectos
        When A user clicks on the projects button
        Then The projects section is displayed
        
