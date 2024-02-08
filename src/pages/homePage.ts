import { Page} from 'playwright';
import { expect } from 'playwright/test';
import * as locator from "../../config/locators.json";


export const navigateToSonyApplication = async (
    page: Page,
    url: string,
): Promise<void> => {
   await launchApp(page, url)
};

async function launchApp(page: Page, url:string) {
    
    await page.goto(url);
}

export const verifyLoginPage = async (
    page: Page,
    title: string,
): Promise<void> => {
   expect(await page.title()).toBe(title);
};

export const enterEmailId = async (
    page: Page,
    emailId: string,
): Promise<void> => {
   await mailId(page, locator.email_field, emailId)
};

async function mailId(page: Page, locator:string, value:string) {
    
    await page.locator(locator).fill(value);
}

export const enterPassword = async (
    page: Page,
    pass: string,
): Promise<void> => {
   await password(page, locator.password_field, pass)
};

async function password(page: Page, locator:string, value:string) {
    
    await page.locator(locator).fill(value);
}

export const clickSignInBtn = async (
    page: Page,
): Promise<void> => {
   await clickBtn(page, locator.signIn_Btn)
};

export const clickSubmitBtn = async (
    page: Page,
): Promise<void> => {
   await clickBtn(page, locator.submit_btn)
};

async function clickBtn(page: Page, locator:string) {
    
    await page.locator(locator).click();
}
