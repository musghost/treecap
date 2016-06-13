import {Component, Input} from '@angular/core';

@Component({
  selector: 'Header',
  template: `
    <header class="header">
      <div class="logo">
        <img src="assets/images/treecap.png">
      </div>
      <nav class="menu">
        <span>Portal de Inversionistas</span>
        <a href="#" (click)="enter()">Entrar</a>
      </nav>
    </header>
  `
})
export class Header {
  @Input() modal;

  enter() {
    this.modal();
  }
}
