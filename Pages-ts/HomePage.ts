import { ProtractorBase } from "../LetBase/Base/ProtractorBase";

const { browser, element, by } = require("protractor");


export class HomePage extends ProtractorBase
{
    private homePageHeader=element(by.xpath("//div[contains(text(),'Welcome to LetCode!')]"));
    private loginButtonHomePage=element(by.xpath("//a[contains(text(),' Log in ')]"));
    private signOutButton=element(by.xpath("//a[contains(text(),'Sign out')]"));
    


    async clickLoginButtonOnHomePage()
    {
        await this.click(this.loginButtonHomePage)
    }

    async getHeaderofHomPage()
    {
        let header=await this.homePageHeader.getText();
        return header;
    }

    async ifSignOutButtonDispalyed()
    {       this.visibilityOf(this.signOutButton)
            let boolean= await this.signOutButton.isDisplayed();
            return boolean;
    }
    async clickOnSignOutButton()
    {
        this.click(this.signOutButton)
    }
    

}

//module.exports=new HomePage;
