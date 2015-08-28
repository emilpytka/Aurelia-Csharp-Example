/// <reference path="../../../src/typings/jasmine.d.ts"/>

import {PageObject_About} from './about.po';
import {PageObject_Skeleton} from './skeleton.po';

xdescribe('aurelia skeleton app', function() {
  var po_about,
      po_skeleton;

  beforeEach( () => {
    po_skeleton = new PageObject_Skeleton();
    po_about = new PageObject_About();

    browser.loadAndWaitForAureliaPage("http://localhost:9000/#/about");
  });

  it('should load the page and display the about page title', () => {
    expect(po_skeleton.getCurrentPageTitle()).toBe('About | Aurelia app');
  });

  it('should display default first name', () => {
    expect(po_about.getFirstName()).toBe('John');
  });

  it('should display default last name', () => {
    expect(po_about.getLastName()).toBe('Doe');
  });

  it('should refresh firstName, lastName after changing fullName', () => {
    po_about.setFullName("Rob Eisenberg");

    browser.sleep(200);

    expect(po_about.getFirstName()).toBe('Rob');
    expect(po_about.getLastName()).toBe('Eisenberg');
  });
});
