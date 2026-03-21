const {test, expect} = require('@playwright/test');

export class util
{

    constructor(page)
    {
        this.page=page;
    }

    async loadPage(pageURL)
    {
        try{
            console.log("INFO --> Loading webpage with url", pageURL);
            await this.page.goto("https://thetokitokistore.myinstamojo.com/");
          }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

    async findElement(searchType, elementName)
    {
        try{
            switch(searchType)
            {
                case "button":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.getByRole("button",{name: elementName});
                
                case "placeholder":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.getByPlaceholder(elementName);
            }
        }
        catch(error)
        {
             console.log("Exception Logged --> ",error);
        }
    }

}
