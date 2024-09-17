
exports.services = class services {
    constructor(page) {
        this.page = page
        this.navItem = (navItems) => page.locator(`li[data-cy='${navItems}']`)
    }

    async clickSubNav(navItems) {
        await this.navItem(navItems).click()
    }
}