import {Component} from '@angular/core';
import {Header} from './header';
import {Title} from './title';
import {Services} from './services/services';
import {Footer} from './footer';
import {Modal} from './modal';
import {MnFullpageDirective} from 'ng2-fullpage';

@Component({
  selector: 'App',
  template: `
    <Header [modal]="toggleModal"></Header>
    <Modal *ngIf="showModal" [modal]="toggleModal"></Modal>
    <div mnFullpage [mnFullpageNavigation]="true" [mnFullpageKeyboardScrolling]="true">
      <div class="section">
        <main class="main one">
          <TitleComponent></TitleComponent>
        </main>
      </div>
      <div class="section">
        <main class="main two">
          <Services></Services>
        </main>
      </div>
    </div>
    <Footer></Footer>
  `,
  directives: [Header, Title, Services, Footer, Modal, MnFullpageDirective]
})
export class Main {
  constructor() {
    this.showModal = false;
  }

  toggleModal = () => {
    this.showModal = !this.showModal;
  }
}
