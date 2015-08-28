/// <reference path="./typings/aurelia/aurelia-router.d.ts"/>

import 'bootstrap'
import 'bootstrap/css/bootstrap.css!'
import {Router} from 'aurelia-router'
import {RouterConfiguration} from 'aurelia-router/router-configuration';

export class App{

  public router: Router;

  configureRouter(config : RouterConfiguration, router: Router){

    config.title = 'Aurelia app';
    config.map([
      { route: ['','home'], name: 'home',  moduleId: './home', nav: true, title:'Home Page' },
      { route: 'about', name: 'about', moduleId: './about', nav: true, title: 'About' },
      { route: 'postDetails', name: 'postDetails', moduleId: './postDetails', nav: false },
      { route: 'webapi', name: 'webapi', moduleId: './webapi', nav: true, title: 'webapi' }
    ]);

    this.router = router;
  }
}
