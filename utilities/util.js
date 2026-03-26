import { test, expect } from '@playwright/test';

export class util
{

    constructor(page)
    {
        this.page=page;
        this.fieldName = "";
    }

    async loadPage(pageURL)
    {
        try{
            await test.step(`INFO --> Loading webpage with url ${pageURL}`, async ()=>
            {
                console.log("INFO --> Loading webpage with url", pageURL);
                await this.page.goto(pageURL);
            });
          }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

    async findElement(searchType, elementName)
    {
        try{
            let locator;
            await test.step(`INFO --> Looking for ${searchType} with label ${elementName}`, async ()=>
            {
                switch(searchType)
                {
                    case "button":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        locator = this.page.getByRole("button",{name: elementName});
                        break;
                    
                    case "placeholder":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.getByPlaceholder(elementName);
                        break;

                    case "link":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        locator = this.page.locator("//*[text()='"+elementName+"']/parent::a");
                        break;

                    case "text":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.locator("//*[text()='"+elementName+"']");
                        break;

                    case "dropdown":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.locator(`//select[@name='${elementName}']`);
                        break;

                    case "textbox":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.locator(`//*[text()='${elementName}']/preceding-sibling::input`);
                        break;
                }
            });
            return locator;
        }
        catch(error)
        {
             console.log("Exception Logged --> ",error);
        }
    }

     async findElementN(searchType, elementName, instance)
    {
        try{
            let locator;
            await test.step(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`, async ()=>
            {
                switch(searchType)
                {
                    case "button":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                        locator = this.page.getByRole("button",{name: elementName}).nth(instance);
                        break;
                    
                    case "placeholder":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                        this.fieldName = elementName;
                        locator = this.page.getByPlaceholder(elementName).nth(instance);
                        break;

                    case "link":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                        locator = this.page.locator("//*[text()='"+elementName+"']/parent::a").nth(instance);
                        break;

                    case "text":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                        this.fieldName = elementName;
                        locator = this.page.locator("//*[text()='"+elementName+"']").nth(instance);
                        break;

                    case "dropdown":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.locator(`//select[@name='${elementName}']`).nth(instance);
                        break;

                    case "textbox":
                        console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                        this.fieldName = elementName;
                        locator = this.page.locator(`//*[text()='${elementName}']/preceding-sibling::input`).nth(instance);
                        break;
                }
            });
            return locator;
        }
        catch(error)
        {
             console.log("Exception Logged --> ",error);
        }
    }

    async fillText(locator,testData)
    {
        try
        {
            const fieldName = this.fieldName;
            await test.step(`INFO --> Entered text ${testData} on field ${fieldName}.`, async ()=>
            {
                await locator.fill(testData);
                console.log(`INFO --> Entered text ${testData} on field ${fieldName}.`);
            });
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

    async click(locator)
    {
        try
        {
            const buttonName = await locator.textContent();
            await test.step(`INFO --> Clicked Button with label ${buttonName}.`, async ()=>
            {
                await locator.click();
                console.log(`INFO --> Clicked Button with label ${buttonName}.`);
            });
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

    async verifyText(locator, expectedText)
    {
        try
        {
            const actualText = await locator.textContent();
            await test.step(`INFO --> Matching expected text - ${expectedText} with actual text - ${actualText}`, async ()=>
            {
                console.log(`INFO --> Matching expected text - ${expectedText} with actual text - ${actualText}`);
                await expect(locator).toHaveText(expectedText);
            });
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

    async waitTillDisappear(locator)
    {
        try
        {
            await test.step(`INFO --> Waiting for element - ${await locator.textContent()} to Disappear from UI.`, async ()=>
            {
                console.log(`INFO --> Waiting for element - ${await locator.textContent()} to Disappear from UI.`);
                await expect(locator).toBeHidden();
            });
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

     async selectDropdownValue(locator, testData)
    {
        try
        {
            const fieldName = this.fieldName;
            await test.step(`INFO --> Selecting dropdown value - ${testData} on field - ${fieldName}.`, async ()=>
            {            
                await locator.selectOption({label:testData});
                console.log(`INFO --> Selected dropdown value - ${testData} on field - ${fieldName}.`);
            });
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

}
