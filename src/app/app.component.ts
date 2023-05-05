import { Component } from '@angular/core';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, FooterComponent, RouterOutlet],
})
export class AppComponent {
  mostrarMenu: boolean = false;
  toogleMenu() {
    this.mostrarMenu = !this.mostrarMenu;
  }

  universeLinks = environment.universeLinks;
  showUniverse: boolean = false;
  toggleUniverse() {
    this.showUniverse = !this.showUniverse;
  }

  showHistory: boolean = false;
  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  societyLinks = environment.societyLinks;
  showSociety: boolean = false;
  toggleSociety() {
    this.showSociety = !this.showSociety;
  }

  housesLinks = environment.housesLinks;
  showHouses: boolean = false;
  toggleHouses() {
    this.showHouses = !this.showHouses;
  }

  churchLinks = environment.churchLinks;
  showChurch: boolean = false;
  toggleChurch() {
    this.showChurch = !this.showChurch;
  }

  guildLinks = environment.guildLinks;
  showGuild: boolean = false;
  toggleGuild() {
    this.showGuild = !this.showGuild;
  }
}
