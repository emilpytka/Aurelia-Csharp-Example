/// <reference path="../../../src/typings/jasmine.d.ts"/>

import {PageObject_Home} from './home.po';
import {PageObject_Skeleton} from './skeleton.po';

describe('home page demo', function () {
    var po_home : PageObject_Home,
        po_skeleton : PageObject_Skeleton;

    beforeEach(() => {
        po_skeleton = new PageObject_Skeleton();
        po_home = new PageObject_Home();

        browser.loadAndWaitForAureliaPage("http://localhost:9000/#/home");
    });


    xit('adding new post', () => {
        po_home.getPostsCount().then(countBefore => {
            po_home.btnAddNewPostClick().then(() => {
                po_home.setNewPostTitle('title 2');
                po_home.setNewPostContent('content 1');
                po_home.btnSaveNewPostClick().then(() => {
                    po_home.getPostsCount().then(countAfter => {
                        po_home.getAlert().then(alertMessage => {
                            expect(countAfter).toBe(countBefore + 1);
                            expect(alertMessage).toEqual("Post saved");
                        });
                    });
                });
            });
        });
    });


    it('cancel adding new post should show alert if user write something', () => {
        po_home.btnAddNewPostClick().then(() => {
            po_home.setNewPostTitle('title 2').then(() => {
                po_home.btnCancelNewPostClick().then(() => {
                        var a = browser.switchTo().alert().then(
                            function (alert) { alert.accept(); return true; },
                            function () { return false; });

                    expect(a).toBe(true);
                });
            });
        });

    });


    it('cancel adding new post shouldnt show alert if user didnt write anything', () => {

        po_home.btnAddNewPostClick().then(() => {
                po_home.btnCancelNewPostClick().then(() => {
                    var a = browser.switchTo().alert().then(
                        function (alert) { alert.accept(); return true; },
                        function () { return false; });

                    expect(a).toBe(false);
                });
        });
    });
    
});