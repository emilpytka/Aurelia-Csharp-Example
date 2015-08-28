/// <reference path="../../src/typings/jasmine.d.ts"/>

import {App} from '../../src/app'

class RouterStub {

  private routes : any;

  configure(handler){
    handler(this);
  }

  map(routes){
    this.routes = routes;
  }
}

describe('the App module', () => {
  var sut
   , mockedRouter;

 beforeEach(() => {
   mockedRouter = new RouterStub();
   sut = new App();
   sut.configureRouter(mockedRouter, mockedRouter);
 });

 it('contains a router property', () => {
   expect(sut.router).toBeDefined();
 });

 it('configures the router title', () => {
   expect(sut.router.title).toEqual('Aurelia app');
 });

 it('should have a home route', () => {
   expect(sut.router.routes).toContain({ route: ['','home'], name: 'home',  moduleId: './home', nav: true, title:'Home Page' });
 });

 it('should have a about route', () => {
    expect(sut.router.routes).toContain({ route: 'about', name: 'about', moduleId: './about', nav: true, title:'About' });
 });

 it('should have a postDetails route', () => {
   expect(sut.router.routes).toContain({ route: 'postDetails', name: 'postDetails', moduleId: './postDetails', nav: false });
 });
});
