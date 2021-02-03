"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const HomePage_1 = require("../Pages-ts/HomePage");
const LoginPage_1 = require("../Pages-ts/LoginPage");
var dataobject = require('../JSON_Data/data.json');
const loginPage = new LoginPage_1.LoginPage();
const homePage = new HomePage_1.HomePage();
describe("Automating login page of LetCode website", function () {
    beforeEach(function () {
        protractor_1.browser.get(dataobject.testURL);
    });
    it("TC001 - Verify the Page Header and navigate to Login Page", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let header = yield homePage.getHeaderofHomPage();
            expect(header).toContain("Welcome to LetCode!");
        });
    });
    it("TC002- Verify User can login to application successfully", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePage.clickLoginButtonOnHomePage();
            yield loginPage.enterEmailId(dataobject.UserDetails.username);
            yield loginPage.enterPassword(dataobject.UserDetails.password);
            yield loginPage.clickLoginButton();
            console.log(yield homePage.ifSignOutButtonDispalyed());
        });
    });
    xit("TC003- Verify login fails when password is not entered", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homePage.clickLoginButtonOnHomePage();
            yield loginPage.enterEmailId("sadasawant1956@gmail.com");
            yield loginPage.clickLoginButton();
            yield loginPage.iferrorForNopaswdDisplayed();
            yield homePage.clickOnSignOutButton();
        });
    });
});
