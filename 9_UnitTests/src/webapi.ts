/// <reference path="typings/aurelia/aurelia-http-client.d.ts" />

import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class WebApi {

    public valuesFromApi: Array<string> = [];
    private http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;
    }

    activate() {
        this.http.get("/api/values").then(arr => {
            this.valuesFromApi = JSON.parse(arr.response);
        });
    }
}

