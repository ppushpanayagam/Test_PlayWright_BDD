import { Given, Then, When } from '@cucumber/cucumber';
import {expect} from'@playwright/test';
import * as searchPage from '../pages/searchPage';
import * as data from '../../config/testdata.json';


Given(
    /^the user on the my account page$/,
    async function() {

        const {
            screen: {page},
        } = this;

        await searchPage.verifyMyAccountUrl(page, data.accountPageUrl);
    }
)

Given(
    /^the user search for "([^"]*)" mobile device$/,
    async function(mobileDevice: string) {

        const {
            screen: {page},
        } = this;

        await searchPage.enterMobileDiveDetails(page, mobileDevice);
        await searchPage.clickSearchBtn(page);
    }
)

Given(
    /^the user select the required mobile device$/,
    async function() {

        const {
            screen: {page},
        }=this;

        await searchPage.clickMobileDevice(page);
    }
)

When(
    /^the user add the mobile device to the cart$/,
    async function() {

        const {
            screen: {page},
        }=this;

        await searchPage.clickAddToCartBtn(page);
    }
)

Then(
    /^the user should see the selected mobile device in the cart$/,
    async function() {

        const {
            screen: {page},
        }=this;

        await searchPage.clickCartIcon(page);
        await searchPage.clickCheckOutBtn(page);

    }
)

Then(
    /^the user should see all the details of the mobile device$/,
    async function() {

        const {
            screen: {page},
        }=this;
        await searchPage.clickCheckOutBtn(page);
    }
)