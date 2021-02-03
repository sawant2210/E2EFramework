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
exports.HomePage = void 0;
const ProtractorBase_1 = require("../LetBase/Base/ProtractorBase");
const { browser, element, by } = require("protractor");
class HomePage extends ProtractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.homePageHeader = element(by.xpath("//div[contains(text(),'Welcome to LetCode!')]"));
        this.loginButtonHomePage = element(by.xpath("//a[contains(text(),' Log in ')]"));
        this.signOutButton = element(by.xpath("//a[contains(text(),'Sign out')]"));
    }
    clickLoginButtonOnHomePage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.loginButtonHomePage);
        });
    }
    getHeaderofHomPage() {
        return __awaiter(this, void 0, void 0, function* () {
            let header = yield this.homePageHeader.getText();
            return header;
        });
    }
    ifSignOutButtonDispalyed() {
        return __awaiter(this, void 0, void 0, function* () {
            let boolean = yield this.signOutButton.isDisplayed();
            return boolean;
        });
    }
    clickOnSignOutButton() {
        return __awaiter(this, void 0, void 0, function* () {
            this.click(this.signOutButton);
        });
    }
}
exports.HomePage = HomePage;
