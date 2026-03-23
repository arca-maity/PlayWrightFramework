// const {test, expect} = require('@playwright/test');
import { test, expect } from '@playwright/test';

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
            await this.page.goto(pageURL);
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

                case "link":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator("//*[text()='"+elementName+"']/parent::a");

                case "text":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator("//*[text()='"+elementName+"']");

                 case "dropdown":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator(`//select[@name='${elementName}']`);

                 case "textbox":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator(`//*[text()='${elementName}']/preceding-sibling::input`);
            }
        }
        catch(error)
        {
             console.log("Exception Logged --> ",error);
        }
    }

     async findElementN(searchType, elementName, instance)
    {
        try{
            switch(searchType)
            {
                case "button":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                    return this.page.getByRole("button",{name: elementName}).nth(instance);
                
                case "placeholder":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                    return this.page.getByPlaceholder(elementName).nth(instance);

                case "link":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                    return this.page.locator("//*[text()='"+elementName+"']/parent::a").nth(instance);

                case "text":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName} at position ${instance}`);
                    return this.page.locator("//*[text()='"+elementName+"']").nth(instance);

                case "dropdown":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator(`//select[@name='${elementName}']`).nth(instance);

                 case "textbox":
                    console.log(`INFO --> Looking for ${searchType} with label ${elementName}`);
                    return this.page.locator(`//*[text()='${elementName}']/preceding-sibling::input`).nth(instance);
            }
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
            const fieldName = await locator.textContent();
            await locator.fill(testData);
            console.log(`INFO --> Entered text ${testData} on field ${fieldName}.`);
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
            await locator.click();
            console.log(`INFO --> Clicked Button with label ${buttonName}.`);
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
            console.log(`INFO --> Matching expected text - ${expectedText} with actual text - ${actualText}`);
            await expect(locator).toHaveText(expectedText);
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
            console.log(`INFO --> Waiting for element - ${await locator.textContent()} to Disappear from UI.`);
            await expect(locator).toBeHidden();
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
            await locator.selectOption({label:testData});
            console.log(`INFO --> Selected dropdown value - ${testData} on field - ${await locator.textContent()}.`);
        }
        catch(error)
        {
            console.log("Exception Logged --> ",error);
        }
    }

}
