import {browser,ElementFinder, ProtractorExpectedConditions} from "protractor"
import { protractor } from "protractor/built/ptor";

export class ProtractorBase
{
    public ec: ProtractorExpectedConditions= browser.ExpectedConditions;
    public timeout=30000;
/**
 * @description function is for click action
 * @param element element on which user needs to click  
 */
    public async click(element: ElementFinder)
    {
       await browser.wait(this.ec.elementToBeClickable(element),this.timeout,'')
       await element.click();
    }
/**
 * @description function for clearing text from field and entering text
 * @param element pass the element locator
 * @param testdata data to be typed in the field
 */
    public async type(element:ElementFinder, testdata:string)
    {
        await this.visibilityOf(element);
        await element.sendKeys(testdata)
    }

   /**
    * @description function for clearing text from field and entering text
    * @param element pass the element locator
    * @param testdata data to be typed in the field 
    */ 
    public async clearAndtype(element:ElementFinder, testdata:string)
    {
        await this.visibilityOf(element);
        await element.clear()
        await element.sendKeys(testdata)
    }

    public async assertText(element:ElementFinder, expectedText:string)
    {
        await this.visibilityOf(element);
        let actualText= await element.getText();
        expect(actualText).toBe(expectedText);
    }

    public async assertTrue(element:ElementFinder)
    {
        await this.visibilityOf(element)
        expect(await element.isDisplayed()).toBe(true)
    }

    public async assertFalse(element:ElementFinder)
    {
        await this.visibilityOf(element)
        expect(await element.isDisplayed()).toBe(false);
    }

    public async acceptAlert()
    {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).accept();
    }
    public async dismissAlert()
    {
        await browser.wait(this.ec.alertIsPresent(),this.timeout,'Alert is not present')
        await (await browser.switchTo().alert()).dismiss();
    }

    public async typeInAlert(data:string)
    {
        await this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(data);
    }

    public async getTextFromAlert():Promise<String>
    {
        await this.waitForAlert();
        let alertText= await (await browser.switchTo().alert()).getText();
        return alertText;
      
    }

    public async switchToFrame(framenumber:number)
    {
        await browser.switchTo().frame(framenumber);
    }

    public async typeAndTab(element:ElementFinder, data:string)
    {
        let capabilities=await browser.getCapabilities();
        let platform=capabilities.get("Platform")
        await this.visibilityOf(element);
        await element.clear();
        if(platform==="MAC OS X")
        {
            await element.sendKeys(data,protractor.Key.RETURN)
        }
        else
        {
            await element.sendKeys(data,protractor.Key.ENTER)
        }
    }

    public async mouseMoveAndClick(element:ElementFinder)
    {
        await browser.actions().mouseMove(element.getWebElement()).click().perform();
    }

    public async moveToElement(element:ElementFinder)
    {
        await browser.actions().mouseMove(element.getWebElement()).perform();
    }

    public async waitForAlert() {
        await browser.wait(this.ec.alertIsPresent(), this.timeout, 'Alert is not present');
    }

    public async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element), this.timeout, 'element not visible');
    }
}