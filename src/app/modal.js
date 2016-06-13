import {Component, Input} from '@angular/core';

@Component({
  selector: 'Modal',
  template: `
    <div class="modal">
      <a href="#" (click)="modal()">X</a>
      <form (ngSubmit)="onSubmit()">
        <div>
          <img src="assets/images/sep1.png">
        </div>
        <div>
          <input type="text" placeholder="Usuario">
        </div>
        <div>
          <input type="text" placeholder="Contraseña">
        </div>
        <div class="error-messages" *ngIf="error">
          <p>El nombre de usuario o contraseña son incorrectos.</p>
        </div>
        <div class="row">
          <div class="column">
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
          <div class="column">
            <button type="btn">Entrar</button>
          </div>
        </div>
      </form>
    </div>
  `
})
export class Modal {
  @Input() modal;

  constructor() {
    this.error = false;
  }

  onSubmit = () => {
    this.error = true;
  }
}
