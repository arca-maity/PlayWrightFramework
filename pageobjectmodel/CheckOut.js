import {Util} from "../utilities/Util.js";

export class CheckOut extends Util
{
    constructor(page, testData)
    {
        super(page);
        this.page=page;
        this.testData = testData;
    }

    async clickCheckOut()
    {
        await this.click((await this.findElementN("text","Cart","0")));
        await this.click((await this.findElement("button","Proceed to Checkout")));
        await this.verifyText(await this.findElement("text","Customer Information"),"Customer Information");
    }

    async fillCustomerInfo()
    {
        await this.fillText(await this.findElement("textbox","First Name"),this.testData.firstname);
        await this.fillText(await this.findElement("textbox","Last Name"),this.testData.lastname);
        await this.fillText(await this.findElement("textbox","Email ID"),this.testData.email);
        await this.fillText(await this.findElement("placeholder","Mobile No."),this.testData.mobile);
    }

    async fillDeliveryInfo()
    {
        await this.click(await this.findElement("button","Add Delivery Info"));
        await this.verifyText(await this.findElement("text","Shipping Address"),"Shipping Address");
        await this.verifyText(await this.findElement("text","Billing Address"),"Billing Address");
        await this.fillText(await this.findElement("textbox","House/Flat No, Apartment/Building Name"),this.testData.house);
        await this.fillText(await this.findElement("textbox","District"),this.testData.district);
        await this.fillText(await this.findElement("textbox","Pincode"),this.testData.pincode);
        await this.selectDropdownValue(await this.findElement("dropdown","state"),this.testData.state);
    }
}