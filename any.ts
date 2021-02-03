const { browser } = require("protractor");
const HomePage = require("../Pages/HomePage"); /// to inport this automatically just write ----  new Homepage
const LoginPage = require("../Pages/LoginPage");
var dataobject= require('../JSON_Data/data.json');

//new HomePage
//new LoginPage


describe("Automating login page of LetCode website", function()
{
    beforeEach( function()
    {
     browser.get(dataobject.testURL);
    })

    it("TC001 - Verify the Page Header and navigate to Login Page", async function()
    {
        let header= await HomePage.getHeaderofHomPage();
        expect(header).toContain("Welcome to LetCode!");   
    })

    it("TC002- Verify User can login to application successfully", async function()
    {
        await HomePage.clickLoginButtonOnHomePage();
        await LoginPage.enterEmailId(dataobject.UserDetails.username);
        await LoginPage.enterPassword(dataobject.UserDetails.password)
        await LoginPage.clickLoginButton();
        expect(HomePage.ifSignOutButtonDispalyed()).toEqual(true);
        console.log(await HomePage.ifSignOutButtonDispalyed());
        
    })

    xit("TC003- Verify login fails when password is not entered", async function()
    {
        await HomePage.clickLoginButtonOnHomePage();
        await LoginPage.enterEmailId("sadasawant1956@gmail.com");
        await LoginPage.clickLoginButton();
        await LoginPage.iferrorForNopaswdDisplayed();
        // expect(HomePage.ifSignOutButtonDispalyed()).toEqual(true);
        // console.log(await HomePage.ifSignOutButtonDispalyed());
        await HomePage.clickOnSignOutButton();
    })

})