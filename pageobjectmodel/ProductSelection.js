import {Util} from "../utilities/Util.js";

export class ProductSelection extends Util
{
    constructor(page, testData)
    {
        super(page);
        this.page=page;
        this.testData = testData;
    }

    async selectCategory()
    {
        await this.click(await this.findElement("link",this.testData.category));
    }

    async selectAndAddToCart()
    {
        await this.click(await this.findElementN("text",this.testData.productname,"0"));
        await this.click((await this.findElement("button","Add to Cart")));
        await this.verifyText(await this.findElement("text",`Added 1 items of ${this.testData.productname} to cart.`), `Added 1 items of ${this.testData.productname} to cart.`);
        await this.waitTillDisappear(await this.findElement("text",`Added 1 items of ${this.testData.productname} to cart.`));
    }
}