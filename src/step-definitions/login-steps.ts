import { Given, Then, When } from '@cucumber/cucumber'


Given(
    /^the user launch the applicaiton$/,
    async function() {

        console.log("I am on the home page");

        await global.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=common/home")

    }
)

Given(
    /^the user on the login page$/,
    async function() {

        

    }
)

When(
    /^the user enter valid username and password$/,
    async function() {

        

    }
)

When(
    /^the user click login button$/,
    async function() {

       

    }
)

Then(
    /^the user should be redirected to account page$/,
    async function() {

        
    }
)

Then(
    /^the user should see all the required account details$/,
    async function() {

        

    }
)