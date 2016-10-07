import {Component} from '@angular/core';

@Component({
  selector: 'FormClient',
  template: `
    <div class="container">
      <div class="img-wrapper">
        <img src="assets/images/logo.png" />
      </div>
      <form (ngSubmit)="onSubmit()">
        <div>
          <input type="text" placeholder="User">
        </div>
        <div>
          <input type="text" placeholder="Password">
        </div>
        <div class="error-messages" *ngIf="error">
          <p>El nombre de usuario o contraseña son incorrectos.</p>
        </div>
        <div class="row">
          <div class="column">
            <a href="#">Forgot password?</a>
          </div>
          <div class="column">
            <button type="btn">SignIn</button>
          </div>
        </div>
      </form>
    </div>
  `
})
export class FormClient {
}
