const{test,expect} = require("@playwright/test")
const{homePage} = require("../pages/home")
const{navigation} = require("../pages/navigation")
const{services} = require("../pages/services")
const data = require("../fixtures/data.json")

require('dotenv').config()

test.beforeEach(async({page})=>{
    const Home = new homePage(page);
    await page.goto(process.env.BASE_URL);
})
test("navigation throught the services", async({page})=>{
    
   const navigate = new navigation(page);
    for(const navElement of data.masterData.navigation.services){
        await navigate.clickNavItem(navElement.name);
        await page.waitForTimeout(2000);

        const service = new services(page);
        for(const subNavs of navElement.offerings){
            await service.clickSubNav(subNavs);
            await page.waitForTimeout(2000);
        }
    }
   })
    


