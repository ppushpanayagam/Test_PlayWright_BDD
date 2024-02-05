import { Page, Locator } from "@playwright/test"

export default class HomePage {
    readonly page: Page
    readonly searchFiled: Locator
    readonly searchBtn: Locator
    readonly title;

    constructor(page: Page) {
        this.page = page
        this.searchFiled = this.page.getByPlaceholder('Search For Products')
        this.searchBtn = this.page.locator('.type-text')
        this.title = this.page.title();

    }
    async getTitleOfThePage(){
       return this.title;
    }
    async enterSearchItem(mobile: string) {
        await this.searchFiled.fill(mobile)
    }
    async clickSearchButton() {
        await this.searchBtn.click()
    }
    
}