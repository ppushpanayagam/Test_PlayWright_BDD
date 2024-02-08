import { Given, Then, When } from '@cucumber/cucumber'
import {expect} from'@playwright/test'
import * as data from '../../config/testdata.json'


Given(
    /^the user launch the applicaiton$/,
    async function() {

        await global.page.goto(data.baseUrl)
    }
)

Given(
    /^the user on the login page$/,
    async function() {

        expect(await global.page.title()).toBe(data.lamdaApp_Title);
    }
)

When(
    /^the user enter valid username and password$/,
    async function() {

        await global.page.locator('li.dropdown:nth-child(6) > a').click();
        await global.page.locator('#input-email').fill(data.email_Id);
        await global.page.locator('#input-password').fill(data.password);   
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
        expect(actual).toBe(data.account_Header);
    }
)

Then(
    /^the user should see all the required account details$/,
    async function() {

        expect(await global.page.url()).toContain(data.accountPageUrl);
    }
)