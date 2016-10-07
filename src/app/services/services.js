import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {Service} from './service';

@Component({
  selector: 'Services',
  template: `
    <div class="container">
      <h1 class="services-h1">
        Our clients
      </h1>
      <div class="clients-wrapper">
        <div class="clients">
          <div *ngFor="let num of num1">
            <img src="assets/logos/logo{{num + 1}}.png" />
          </div>
        </div>
        <div class="clients">
          <div *ngFor="let num of num2">
            <img src="assets/logos/logo{{num + 7}}.png" />
          </div>
        </div>
        <div class="clients">
          <div *ngFor="let num of num3">
            <img src="assets/logos/logo{{num + 13}}.png" />
          </div>
        </div>
        <div class="clients">
          <div *ngFor="let num of num4">
            <img src="assets/logos/logo{{num + 19}}.png" />
          </div>
        </div>
        <div class="clients">
          <div *ngFor="let num of num5">
            <img src="assets/logos/logo{{num + 25}}.png" />
          </div>
        </div>
      </div>
    </div>
  `,
  directives: [Service],
  providers: [HTTP_PROVIDERS]
})
export class Services {
  constructor(http) {
    this.http = http;
    this.getServices().subscribe(result => {
      this.services = result.map((item, index) => {
        item.index = index + 1;
        return item;
      });
    });

    this.num1 = Array(6).fill().map((x, i) => i);
    this.num2 = Array(6).fill().map((x, i) => i);
    this.num3 = Array(6).fill().map((x, i) => i);
    this.num4 = Array(6).fill().map((x, i) => i);
    this.num5 = Array(6).fill().map((x, i) => i);
  }

  static get parameters() { // http://stackoverflow.com/questions/34800150/angular-2-es6-inject-http
    return [[Http]];
  }

  getServices() {
    return this.http
      .get('app/services/services.json')
      .map(response => response.json());
  }
}
