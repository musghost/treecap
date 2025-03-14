import {Component} from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <footer class="footer">
      <form class="code" (ngSubmit)="onSubmit()">
        <p>Introduce código único para descargar nuestra presentación .ppt <input type="text" [(ngModel)]="code"></p>
      </form>
      <div class="contact">
        <ul>
          <li>(55) 4567.8450</li>
          <li><a href="mailto:hola@treecap.mx">hola@treecap.mx</a></li>
          <li>Paseo de las Palmas 1880, Colonia Lomas de Chapultepec, CP11000</li>
        </ul>
        <div class="mellow">
          <img src="assets/images/mellow.png" class="img-normal">
          <img src="assets/images/Mellow-01.png" class="img-small">
        </div>
      </div>
    </footer>
  `
})
export class Footer {
  constructor() {
    this.code = '';
  }
  onSubmit() {
    if (this.code === 'TreeCap1880') {
      window.open('/assets/TreeCap_NEW.pdf');
    }
  }
}
