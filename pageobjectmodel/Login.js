import {Util} from "../utilities/Util.js";

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