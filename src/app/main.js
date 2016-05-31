import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {Services} from './services/services';
import {Footer} from './footer';
import {Modal} from './modal';

@Component({
  selector: 'App',
  template: `
    <div class="main-container">
      <Header [modal]="toggleModal"></Header>
      <Modal *ngIf="showModal"></Modal>
      <main class="main">
        <TitleComponent></TitleComponent>
      </main>
      <main class="main">
        <Services></Services>
      </main>
      <Footer></Footer>
    </div>
  `,
  directives: [Header, Title, Services, Footer, Modal]
})
export class Main {
  constructor() {
    this.showModal = false;
  }

  toggleModal = () => {
    console.log(':ojjkl');
    this.showModal = !this.showModal;
  }
}
