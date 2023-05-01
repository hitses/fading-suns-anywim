import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
