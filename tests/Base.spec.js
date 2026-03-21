const {test, expect, request} = require('@playwright/test');
import {util} from "../utilities/util.js";

test("Checking Browser Launch", async({page})=>{

    const utils = new util(page);

    const productCardLocator = page.locator(".w-full .mb-32");

    await utils.loadPage("https://thetokitokistore.myinstamojo.com/");
    const searchBox = await utils.findElement("placeholder","Search");
    await searchBox.fill("Bottle");
    await (await utils.findElement("button","Search")).click();

    await page.locator(".w-full .mb-30").first().waitFor();
    console.log("Products" ,await productCardLocator.count());
    for(let i=0;i<await productCardLocator.count();++i)
    {
        const productName = await productCardLocator.nth(i).textContent();
        console.log(productName);
    }


})