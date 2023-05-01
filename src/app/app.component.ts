import { Component } from '@angular/core';
import { FooterComponent } from './common/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';

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

  showUniverse: boolean = false;
  toggleUniverse() {
    this.showUniverse = !this.showUniverse;
  }

  showHistory: boolean = false;
  toggleHistory() {
    this.showHistory = !this.showHistory;
  }

  universeLinks = [
    {
      url: 'prologo',
      name: 'Prólogo',
    },
    {
      url: 'prehistoria',
      name: 'Prehistoria',
    },
    {
      url: 'Primera República',
      name: 'Primera República',
    },
    {
      url: 'portal-de-salto',
      name: 'El portal de Salto',
    },
    {
      url: 'la-diaspora',
      name: 'La Diáspora',
    },
    {
      url: 'el-profeta-y-su-iglesia',
      name: 'El Profeta y su Iglesia',
    },
    {
      url: 'primer-contacto-los-shantor',
      name: 'Primer contacto: los Shantor',
    },
    {
      url: 'los-vau',
      name: 'Los Vau',
    },
    {
      url: 'la-guerra-de-los-ukar',
      name: 'La guerra de los Ukar',
    },
    {
      url: 'orden-del-caos',
      name: 'Orden del Caos',
    },
    {
      url: 'la-segunda-republica',
      name: 'La Segunda República',
    },
    {
      url: 'el-despojamiento',
      name: 'El Despojamiento',
    },
    {
      url: 'la-nueva-edad-oscura',
      name: 'La Nueva Edad Oscura',
    },
    {
      url: 'las-invasiones-barbaras',
      name: 'Las Invasiones Bárbaras',
    },
    {
      url: 'vladimir-une-las-estrellas',
      name: 'Vladimir une las estrellas',
    },
    {
      url: 'la-guerra-simbionte',
      name: 'La Guerra Simbionte',
    },
    {
      url: 'las-guerras-del-emperador',
      name: 'Las Guerras del Emperador',
    },
    {
      url: 'la-consolidación',
      name: 'La Consolidación',
    },
  ];
}
