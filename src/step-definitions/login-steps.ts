import { Given, Then, When } from '@cucumber/cucumber'
import {expect} from'@playwright/test'
import * as data from '../../config/testdata.json'


Given(
    /^the user launch the applicaiton$/,
    async function() {

        const {
            screen: {page},
        } = this;

        await page.goto(data.baseUrl)
    }
)

Given(
    /^the user on the login page$/,
    async function() {

        const {
            screen: {page},
        } = this;

        expect(await page.title()).toBe(data.lamdaApp_Title);
    }
)

When(
    /^the user enter valid username and password$/,
    async function() {

        const {
            screen: {page},
        } = this;

        await page.locator('li.dropdown:nth-child(6) > a').click();
        await page.locator('#input-email').fill(data.email_Id);
        await page.locator('#input-password').fill(data.password);   
    }
)

When(
    /^the user click on the login button$/,
    async function() {

        const {
            screen: {page},
        } = this;

        await page.locator('input[type="submit"]').click();
    }
)

Then(
    /^the user should be redirected to account page$/,
    async function() {

        const {
            screen: {page},
        } = this;

        const actual = await page.locator('#content>div:nth-child(1)>h2').textContent();
        expect(actual).toBe(data.account_Header);
    }
)

Then(
    /^the user should see all the required account details$/,
    async function() {

        const {
            screen: {page},
        } = this;
        
        expect(await page.url()).toContain(data.accountPageUrl);
    }
)