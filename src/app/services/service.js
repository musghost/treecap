import {Component, Input} from '@angular/core';

@Component({
  selector: 'Service',
  template: `
    <div class="service">
      <img class="service-logo" src="assets/images/{{service.logo}}"/>
      <h3 class="service-h3">
        {{ service.title }}
      </h3>
      <span class="index">{{ service.index }}</span>
    </div>
  `
})
export class Service {
  @Input() service;
}
