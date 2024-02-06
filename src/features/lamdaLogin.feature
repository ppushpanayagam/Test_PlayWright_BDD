Feature: Verify Login Scenarios

Background: Successfully launch the application
    Given the user launch the applicaiton
    
    Scenario: Successfully verify added mobile device in the cart
        Given the user on the login page
        When the user enter valid username and password
        And the user click on the login button
        Then the user should be redirected to account page
        And the user should see all the required account details