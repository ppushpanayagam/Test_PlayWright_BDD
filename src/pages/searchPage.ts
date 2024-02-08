import { Page} from 'playwright';
import { expect } from 'playwright/test';
import * as locator from "../../config/locators.json";


export const verifyMyAccountPageHeader = async (
    page: Page,
    title: string,
): Promise<void> => {
   expect(getTextContent(page, locator.account_Header)).toBe(title);
};

export const verifyMyAccountTitle = async (
    page: Page,
    header: string,
): Promise<void> => {
   expect(await page.locator(locator.account_Header)).toBe(header);
};

async function getTextContent(page:Page, locator:string) {
    
    await page.locator(locator).textContent();
}

export const enterMobileDiveDetails = async (
    page: Page,
    mobileName: string,
): Promise<void> => {
   await enterSearchField(page, locator.search_Field, mobileName);
};

export const clickSearchBtn = async (
    page: Page,
): Promise<void> => {
   await clickBtn(page, locator.search_Btn);
};

async function clickBtn(page:Page, locator:string) {
    
    await page.locator(locator).click();
}

async function enterSearchField(page:Page, locator:string, value:string) {
    
    await page.locator(locator).fill(value)
}

export const verifyMyAccountUrl = async (
    page: Page,
    value: string
): Promise<void> => {
    expect(await page.url()).toContain(value);
};

export const clickMobileDevice = async (
    page: Page,
): Promise<void> => {
    await clickElement(page, locator.mobileDeviceToSelect)
};

async function clickElement(page:Page, locator:string) {
    
    await page.locator(locator).click();
}

export const clickAddToCartBtn = async (
    page: Page,
): Promise<void> => {
    await clickElement(page, locator.add_CartBtn)
};

export const clickCartIcon = async (
    page: Page,
): Promise<void> => {
    await clickElement(page, locator.cart_Icon)
};

export const clickCheckOutBtn = async (
    page: Page,
): Promise<void> => {
    await clickElement(page, locator.checkOutBtn_Notification)
};

export const verifyMobileDeviceName = async (
    page: Page,
    value: string
): Promise<void> => {
    expect(await page.locator(locator.deviceName)).toContainText(value);
};

export const verifyMobilePrice = async (
    page: Page,
    value: string
): Promise<void> => {
    expect(await page.locator(locator.devicePrice)).toContainText(value);
};
