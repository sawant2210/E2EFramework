var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { browser } = require("protractor");
const HomePage = require("../Pages/HomePage");
const LoginPage = require("../Pages/LoginPage");
var dataobject = require('../JSON_Data/data.json');
describe("Automating login page of LetCode website", function () {
    beforeEach(function () {
        browser.get(dataobject.testURL);
    });
    it("TC001 - Verify the Page Header and navigate to Login Page", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let header = yield HomePage.getHeaderofHomPage();
            expect(header).toContain("Welcome to LetCode!");
        });
    });
    it("TC002- Verify User can login to application successfully", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield HomePage.clickLoginButtonOnHomePage();
            yield LoginPage.enterEmailId(dataobject.UserDetails.username);
            yield LoginPage.enterPassword(dataobject.UserDetails.password);
            yield LoginPage.clickLoginButton();
            expect(HomePage.ifSignOutButtonDispalyed()).toEqual(true);
            console.log(yield HomePage.ifSignOutButtonDispalyed());
        });
    });
    xit("TC003- Verify login fails when password is not entered", function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield HomePage.clickLoginButtonOnHomePage();
            yield LoginPage.enterEmailId("sadasawant1956@gmail.com");
            yield LoginPage.clickLoginButton();
            yield LoginPage.iferrorForNopaswdDisplayed();
            yield HomePage.clickOnSignOutButton();
        });
    });
});
