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
    await utility.verifyText(await utility.findElement("text","Customer Information"),"Customer Information");
    await utility.fillText(await utility.findElement("textbox","First Name"),"Arca");
    await utility.fillText(await utility.findElement("textbox","Last Name"),"Maity");
    await utility.fillText(await utility.findElement("textbox","Email ID"),"mail@mail.cc");
    await utility.fillText(await utility.findElement("placeholder","Mobile No."),"919988776655");
    await utility.click(await utility.findElement("button","Add Delivery Info"));
    await utility.verifyText(await utility.findElement("text","Shipping Address"),"Shipping Address");
    await utility.verifyText(await utility.findElement("text","Billing Address"),"Billing Address");
    await utility.fillText(await utility.findElement("textbox","House/Flat No, Apartment/Building Name"),"New House");
    await utility.fillText(await utility.findElement("textbox","District"),"Kolkata");
    await utility.fillText(await utility.findElement("textbox","Pincode"),"998877");
    await utility.selectDropdownValue(await utility.findElement("dropdown","state"),"West Bengal");
    await utility.click(await utility.findElement("button","Review And Pay"));
    await utility.verifyText(await utility.findElement("text","Review Your Order"),"Review Your Order");
    await utility.verifyText(await utility.findElement("text","Scissor"),"Scissor");
    await utility.click(await utility.findElement("button","Make Payment"));
    await utility.verifyText(await utility.findElement("text","Payments are not enabled for this store"),"Payments are not enabled for this store");
})
