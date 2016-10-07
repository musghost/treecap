import {Component, Input} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
    </header>
  `
})
export class Header {
  @Input() modal;

  enter() {
    this.modal();
  }
}
