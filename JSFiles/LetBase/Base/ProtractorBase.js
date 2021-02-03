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
exports.ProtractorBase = void 0;
const protractor_1 = require("protractor");
const ptor_1 = require("protractor/built/ptor");
class ProtractorBase {
    constructor() {
        this.ec = protractor_1.browser.ExpectedConditions;
        this.timeout = 30000;
    }
    click(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.elementToBeClickable(element), this.timeout, '');
            yield element.click();
        });
    }
    type(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.sendKeys(testdata);
        });
    }
    clearAndtype(element, testdata) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            yield element.clear();
            yield element.sendKeys(testdata);
        });
    }
    assertText(element, expectedText) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
            let actualText = yield element.getText();
        });
    }
    assertTrue(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
        });
    }
    assertFalse(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.visibilityOf(element);
        });
    }
    acceptAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).accept();
        });
    }
    dismissAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeout, 'Alert is not present');
            yield (yield protractor_1.browser.switchTo().alert()).dismiss();
        });
    }
    typeInAlert(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            yield (yield protractor_1.browser.switchTo().alert()).sendKeys(data);
        });
    }
    getTextFromAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.waitForAlert();
            let alertText = yield (yield protractor_1.browser.switchTo().alert()).getText();
            return alertText;
        });
    }
    switchToFrame(framenumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(framenumber);
        });
    }
    typeAndTab(element, data) {
        return __awaiter(this, void 0, void 0, function* () {
            let capabilities = yield protractor_1.browser.getCapabilities();
            let platform = capabilities.get("Platform");
            yield this.visibilityOf(element);
            yield element.clear();
            if (platform === "MAC OS X") {
                yield element.sendKeys(data, ptor_1.protractor.Key.RETURN);
            }
            else {
                yield element.sendKeys(data, ptor_1.protractor.Key.ENTER);
            }
        });
    }
    mouseMoveAndClick(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(element.getWebElement()).click().perform();
        });
    }
    moveToElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.actions().mouseMove(element.getWebElement()).perform();
        });
    }
    waitForAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.alertIsPresent(), this.timeout, 'Alert is not present');
        });
    }
    visibilityOf(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(this.ec.visibilityOf(element), this.timeout, 'element not visible');
        });
    }
}
exports.ProtractorBase = ProtractorBase;
