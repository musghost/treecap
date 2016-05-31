import {Component} from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <footer class="footer">
      <div class="code">
        <p>Introduce código único para descargar nuestra presentación .ppt</p>
      </div>
      <div class="contact">
        <ul>
          <li>(55) 4567.8450</li>
          <li><a href="mailto:hola@treecap.mx">hola@treecap.mx</a></li>
          <li>Paseo de las Palmas 1880, Colonia Lomas de Chapultepec, CP11000</li>
        </ul>
        <div class="mellow">
          <img src="assets/images/mellow.png">
        </div>
      </div>
    </footer>
  `
})
export class Footer {}
