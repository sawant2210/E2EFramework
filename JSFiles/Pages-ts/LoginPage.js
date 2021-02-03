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
exports.LoginPage = void 0;
const ProtractorBase_1 = require("../LetBase/Base/ProtractorBase");
const { browser, element, by } = require("protractor");
const { ExpectedConditions } = require("protractor");
class LoginPage extends ProtractorBase_1.ProtractorBase {
    constructor() {
        super(...arguments);
        this.email = element(by.name("email"));
        this.password = element(by.name("password"));
        this.loginButton = element(by.buttonText("LOGIN"));
        this.errorForNoPaswd = element(by.xpath("//div[contains(text(),'Error: The password is invalid or the user does not have a password.')]"));
    }
    enterEmailId(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.email, name);
        });
    }
    enterPassword(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.type(this.password, name);
        });
    }
    clickLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.click(this.loginButton);
        });
    }
    iferrorForNopaswdDisplayed() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
exports.LoginPage = LoginPage;
