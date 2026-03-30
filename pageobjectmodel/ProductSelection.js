import {Util} from "../utilities/Util.js";

export class ProductSelection extends Util
{
    constructor(page)
    {
        super(page);
        this.page=page;
    }

    async selectCategory(category)
    {
        await this.click(await this.findElement("link",category));
    }

    async selectAndAddToCart(product)
    {
        await this.click(await this.findElementN("text",product,"0"));
        await this.click((await this.findElement("button","Add to Cart")));
        await this.verifyText(await this.findElement("text",`Added 1 items of ${product} to cart.`), `Added 1 items of ${product} to cart.`);
        await this.waitTillDisappear(await this.findElement("text",`Added 1 items of ${product} to cart.`));
    }
}