Feature: Login 

    Scenario: Sing in on website
        Given I am on the login page
        And fill email and password
        When click sing in
        Then direct to My Account page