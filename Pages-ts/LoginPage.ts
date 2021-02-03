import { ProtractorBase } from "../LetBase/Base/ProtractorBase";
const { browser, element, by } = require("protractor");
const {ExpectedConditions } = require("protractor");

export class LoginPage extends ProtractorBase
{
    private email=element(by.name("email"));
    private password=element(by.name("password"));
    private loginButton=element(by.buttonText("LOGIN"));
    private errorForNoPaswd=element(by.xpath("//div[contains(text(),'Error: The password is invalid or the user does not have a password.')]"))


    async enterEmailId(name:string)
    {
       await this.type(this.email,name)
    }

    async enterPassword(name:string)
    {
        await this.type(this.password,name)
    }

    async clickLoginButton()
    {
        await this.click(this.loginButton)
    }

    async iferrorForNopaswdDisplayed()
    {
       expect(this.errorForNoPaswd.isDisplayed()).toEqual(true);
        
    }


}

//module.exports=new LoginPage;