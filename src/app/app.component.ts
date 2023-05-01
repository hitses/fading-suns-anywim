import { Component } from '@angular/core';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIf, FooterComponent, RouterOutlet],
})
export class AppComponent {
  mostrarMenu: boolean = false;
  toogleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  showUniverse: boolean = false;
  toggleUniverse() {
    this.showUniverse = !this.showUniverse;
  }

  showHistory: boolean = false;
  toggleHistory() {
    this.showHistory = !this.showHistory;
  }
}
