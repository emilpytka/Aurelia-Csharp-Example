/// <reference path="../../../src/typings/selenium-webdriver.d.ts"/>
/// <reference path="../../../src/typings/protractor.d.ts"/>
/// <reference path="../../../src/typings/aurelia-protractor.d.ts"/>


export class PageObject_About {

  constructor() {
  }

  getFirstName() {
    return element(by.id('firstName')).getText();
  }

  getLastName() {
    return element(by.id('lastName')).getText();
  }

  setFullName(value){
    var elementToBind = element(by.valueBind('fullName'));
    return elementToBind.clear().then(() => elementToBind.sendKeys(value));
  }
}
