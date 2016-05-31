import {Component} from '@angular/core';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {Service} from './service';

@Component({
  selector: 'Services',
  template: `
    <div class="container">
      <h1 class="services-h1">
        ¿Qué hacemos?
      </h1>
      <p>
        Apoyamos proyectos que combinan rentabilidad con propósito y que tienen la misión de cambiar la comunidad en la que están. Nuestros servicios:
      </p>
      <div class="services">
        <Service *ngFor="let service of services" [service]="service"></Service>
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
      this.services = result.map(function(item, index){
        item.index = index + 1;
        return item;
      });
    });
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
