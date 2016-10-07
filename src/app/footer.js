import {Component} from '@angular/core';

@Component({
  selector: 'Footer',
  template: `
    <footer class="footer">
      <div class="contact">
        <ul>
          <li><a href="mailto:hola@mellow.cc">hola@mellow.cc</a></li>
          <li>Francisco Márquez 146, Condesa 06140 Ciudad de México. D.F.</li>
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
