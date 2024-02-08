Feature: Verify user able to add a product to cart

Background: Successfully log into the application
    Given the user launch the applicaiton
    And the user on the login page
    When the user enter valid username and password
    And the user click on the login button
    
    @dev
    Scenario: Successfully add a mobile to cart 
        Given the user on the my account page
        And the user search for "HTC Touch HD" mobile device
        And the user select the required mobile device
        When the user add the mobile device to the cart
        Then the user should see the selected mobile device in the cart
        And the user should see all the details of the mobile device