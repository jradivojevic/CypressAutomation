Feature: Click on button and select from dropdown

Scenario: Test that button click shows dropdown
Given we are on amazon website
When we click on button All
Then sidebar is displayed
When we click on dropdown
Then options are displayed
When we click on the option
Then we are taken to the option page