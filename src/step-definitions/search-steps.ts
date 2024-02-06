import { Given, Then, When } from '@cucumber/cucumber'
import {expect} from'@playwright/test'


Given(
    /^the user on the my account page$/,
    async function() {

        const actual = await global.page.locator('#content>div:nth-child(1)>h2').textContent();
        expect(actual).toBe("My Account");
    }
)

Given(
    /^the user search for "([^"]*)" mobile device$/,
    async function(mobileDevice: string) {

        await global.page.locator('').fill(mobileDevice);
        await global.page.locator('').click();  
    }
)

Given(
    /^the user select the required mobile device$/,
    async function() {

        
    }
)

When(
    /^the user add the mobile device to the cart$/,
    async function() {

        
    }
)

Then(
    /^the user should see the selected mobile device in the cart$/,
    async function() {

        
    }
)

Then(
    /^the user should see all the details of the mobile device$/,
    async function() {

        
    }
)