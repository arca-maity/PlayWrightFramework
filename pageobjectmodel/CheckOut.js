import {Util} from "../utilities/Util.js";

export class Checkout extends Util
{
    constructor(page)
    {
        super(page);
        this.page=page;
    }

    async clickCheckOut()
    {
        await this.click((await this.findElementN("text","Cart","0")));
        await this.click((await this.findElement("button","Proceed to Checkout")));
        await this.verifyText(await this.findElement("text","Customer Information"),"Customer Information");
    }

    async fillCustomerInfo()
    {
        await this.fillText(await this.findElement("textbox","First Name"),"Arca");
        await this.fillText(await this.findElement("textbox","Last Name"),"Maity");
        await this.fillText(await this.findElement("textbox","Email ID"),"mail@mail.cc");
        await this.fillText(await this.findElement("placeholder","Mobile No."),"919988776655");
    }

    async fillDeliveryInfo()
    {
        await this.click(await this.findElement("button","Add Delivery Info"));
        await this.verifyText(await this.findElement("text","Shipping Address"),"Shipping Address");
        await this.verifyText(await this.findElement("text","Billing Address"),"Billing Address");
        await this.fillText(await this.findElement("textbox","House/Flat No, Apartment/Building Name"),"New House");
        await this.fillText(await this.findElement("textbox","District"),"Kolkata");
        await this.fillText(await this.findElement("textbox","Pincode"),"998877");
        await this.selectDropdownValue(await this.findElement("dropdown","state"),"West Bengal");
    }
}