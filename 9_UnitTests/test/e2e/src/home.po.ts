/// <reference path="../../../src/typings/selenium-webdriver.d.ts"/>
/// <reference path="../../../src/typings/protractor.d.ts"/>
/// <reference path="../../../src/typings/aurelia-protractor.d.ts"/>


export class PageObject_Home {

    constructor() {
    }

    getAlert(): webdriver.promise.Promise<string> {
        var retVal: webdriver.promise.Promise<string>;

        try {
            var el = element(by.className("alert")).element(by.className('alertmessage'));
            if (el != null) {
                retVal = el.getText();
            }
        } catch (e) {
            retVal = new webdriver.promise.Promise();
        }

        return retVal;
    }

    btnAddNewPostClick() {
        return element(by.id('btnAddNewPost')).click();
    }

    btnClearListClick() {
        element(by.id('btnClearList')).click();
    }

    getNewPostTitle() {
        element(by.className('postNew')).element(by.valueBind('post.title')).getText();
    }

    setNewPostTitle(value) {
        var elementToBind = element(by.className('postNew')).element(by.valueBind('post.title'));
        return elementToBind.clear().then(() => elementToBind.sendKeys(value));
    }

    getNewPostContent() {
        element(by.className('postNew')).element(by.valueBind('post.content')).getText();
    }

    setNewPostContent(value) {
        var elementToBind = element(by.className('postNew')).element(by.valueBind('post.content'));
        return elementToBind.clear().then(() => elementToBind.sendKeys(value));
    }

    btnSaveNewPostClick() {
        return element(by.className('postNew')).element(by.className('btnSave')).click();
    }

    btnCancelNewPostClick() {
        return element(by.className('postNew')).element(by.className('btnCancel')).click();
    }

    getPostsCount() {
        return element.all(by.className('post')).count();
    }

    getNewPostsCount() {
        return element.all(by.className('postNew')).count();
    }
}
