import {Util} from "../utilities/util.js";

export class Payment extends Util
{
    constructor(page, testData)
    {
        super(page);
        this.page=page;
        this.testData = testData;
    }

    async clickReviewAndPay()
    {
        await this.click(await this.findElement("button","Review And Pay"));
        await this.verifyText(await this.findElement("text","Review Your Order"),"Review Your Order");
        await this.verifyText(await this.findElement("text",this.testData.productname),this.testData.productname);
    }

    async makePayment()
    {
        await this.click(await this.findElement("button","Make Payment"));
        await this.verifyText(await this.findElement("text","Payments are not enabled for this store"),"Payments are not enabled for this store");
    }
}