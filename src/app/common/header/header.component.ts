import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { Url } from './url.interface';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, DesplegableComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  universo: Array<Url> = [
    {
      link: '/universo/historia',
      nombre: 'Historia',
    },
    {
      link: '/universo/sociedad',
      nombre: 'Sociedad',
    },
  ];
  personajes: Array<Url> = [
    {
      link: '/personajes/puntos',
      nombre: 'Puntos',
    },
  ];
}
