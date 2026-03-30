import {Util} from "../utilities/Util.js";

export class Payment extends Util
{
    constructor(page)
    {
        super(page);
        this.page=page;
    }

    async clickReviewAndPay()
    {
        await this.click(await this.findElement("button","Review And Pay"));
        await this.verifyText(await this.findElement("text","Review Your Order"),"Review Your Order");
        await this.verifyText(await this.findElement("text","Scissor"),"Scissor");
    }

    async makePayment()
    {
        await this.click(await this.findElement("button","Make Payment"));
        await this.verifyText(await this.findElement("text","Payments are not enabled for this store"),"Payments are not enabled for this store");
    }
}