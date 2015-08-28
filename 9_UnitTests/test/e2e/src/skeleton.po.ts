/// <reference path="../../../src/typings/selenium-webdriver.d.ts"/>
/// <reference path="../../../src/typings/protractor.d.ts"/>
/// <reference path="../../../src/typings/aurelia-protractor.d.ts"/>

export class PageObject_Skeleton {

  constructor() {
  }

  getCurrentPageTitle() {
    return browser.getTitle();
  } 

  navigateTo(href) {
    element(by.xpath('a[href="' + href + '"]')).click();
    return browser.waitForHttpDone();
  }
}
