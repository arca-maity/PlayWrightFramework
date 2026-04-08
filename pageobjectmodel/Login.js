import {Util} from "../utilities/util.js";

export class Login extends Util
{
    constructor(page)
    {
        super(page);
        this.page=page;
    }

    async navigateToURL()
    {
        await this.loadPage();
    }
}