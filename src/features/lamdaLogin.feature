Feature: Verify user able to add a product to cart

Background:
    Given the user launch the applicaiton
    
    @Dev
    Scenario: Successfully view the user account details 
        Given the user on the login page
        When the user enter valid username and password
        And the user click login button
        Then the user should be redirected to account page
        And the user should see all the required account details