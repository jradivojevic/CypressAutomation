Feature: Search for an item on Amazon

Scenario Outline: Test we can can input something into search field and select it
    Given amazon website is open
    When we search for a "<book>"
    Then results are displayed
    Examples: 
    | book                  |
    | BBD IN Action         |
    | Cucumber with Gherkin |
    | Cypress Automation    |
