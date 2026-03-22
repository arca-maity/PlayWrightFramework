const {test} = require('@playwright/test');
import {util} from "../utilities/util.js";

test("Complete Order Flow", async({page})=>{

    const utility = new util(page);

    await utility.loadPage("https://thetokitokistore.myinstamojo.com/");

    await utility.click(await utility.findElement("link","Below 100"));
    await utility.click(await utility.findElementN("text","Scissor","0"));
    await utility.click((await utility.findElement("button","Add to Cart")));
    await utility.verifyText(await utility.findElement("text","Added 1 items of Scissor to cart."), "Added 1 items of Scissor to cart.");
    await utility.waitTillDisappear(await utility.findElement("text","Added 1 items of Scissor to cart."));
    await utility.click((await utility.findElementN("text","Cart","0")));
    await utility.click((await utility.findElement("button","Proceed to Checkout")));
})
