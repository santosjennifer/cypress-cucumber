Feature: Shopping 

    Scenario: Add item and view shopping cart
        Given search and select the desired item
        And inform quantity and size
        When add to cart 
        Then view the details for checkout