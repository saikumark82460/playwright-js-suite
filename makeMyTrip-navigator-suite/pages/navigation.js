
exports.navigation = class navigation {
    constructor(page) {
        this.page = page
        this.navLink = (linkText) => page.locator(`li[class='${linkText}']`)
    }
    async clickNavItem(linkText) {
        await this.navLink(linkText).click()
    }
}