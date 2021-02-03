import {browser} from "protractor"
import { HomePage } from "../Pages-ts/HomePage";
import { LoginPage } from "../Pages-ts/LoginPage";
// const { browser } = require("protractor");
// const HomePage = require("../Pages/HomePage"); /// to inport this automatically just write ----  new Homepage
// const LoginPage = require("../Pages/LoginPage");
var dataobject= require('../JSON_Data/data.json');
const loginPage=new LoginPage();
const homePage=new HomePage()
//new HomePage
//new LoginPage



describe("Automating login page of LetCode website", function()
{
    beforeEach( function()
    {
        //browser.get(browser.params.env)
     browser.get(dataobject.testURL);
    })

    it("TC001 - Verify the Page Header and navigate to Login Page", async function()
    {
        let header= await homePage.getHeaderofHomPage();
        expect(header).toContain("Welcome to LetCode!");   
    })

    it("TC002- Verify User can login to application successfully", async function()
    {
        await homePage.clickLoginButtonOnHomePage();
        await loginPage.enterEmailId(dataobject.UserDetails.username);
        await loginPage.enterPassword(dataobject.UserDetails.password)
        await loginPage.clickLoginButton();
        expect(await homePage.ifSignOutButtonDispalyed()).toEqual(true);
        console.log(await homePage.ifSignOutButtonDispalyed());
        
    })

    xit("TC003- Verify login fails when password is not entered", async function()
    {
        await homePage.clickLoginButtonOnHomePage();
        await loginPage.enterEmailId("sadasawant1956@gmail.com");
        await loginPage.clickLoginButton();
        await loginPage.iferrorForNopaswdDisplayed();
        expect(await homePage.ifSignOutButtonDispalyed()).toEqual(true);
        console.log(await homePage.ifSignOutButtonDispalyed());
        await homePage.clickOnSignOutButton();
    })

})