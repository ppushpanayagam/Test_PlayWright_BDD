import { Given, Then, When } from '@cucumber/cucumber'
import {expect} from'@playwright/test'


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

        expect(await global.page.title()).toBe("Your Store");
    }
)

When(
    /^the user enter valid username and password$/,
    async function() {

        await global.page.locator('li.dropdown:nth-child(6) > a').click();
        await global.page.locator('#input-email').fill('ppushpanayagam@gmail.com');
        await global.page.locator('#input-password').fill('MyDream@2024');   
    }
)

When(
    /^the user click on the login button$/,
    async function() {

        await global.page.locator('input[type="submit"]').click();
    }
)

Then(
    /^the user should be redirected to account page$/,
    async function() {

        const actual = await global.page.locator('#content>div:nth-child(1)>h2').textContent();
        expect(actual).toBe("My Account");
    }
)

Then(
    /^the user should see all the required account details$/,
    async function() {

        expect(await global.page.url()).toContain("route=account/account");
    }
)