import {Component} from '@angular/core';

@Component({
  selector: 'Modal',
  template: `
    <div class="modal">
      <form>
        <div>
          <img src="assets/images/sep1.png">
        </div>
        <div>
          <input type="text" placeholder="Usuario">
        </div>
        <div>
          <input type="text" placeholder="Contraseña">
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
  
}
