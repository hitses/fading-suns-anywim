import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./common/inicio/inicio.component').then((m) => m.InicioComponent),
  },
  {
    path: 'universo/:id',
    loadComponent: () =>
      import('./universo/universo.component').then((m) => m.UniversoComponent),
  },
  {
    path: 'universo/historia/:id',
    loadComponent: () =>
      import('./historia/historia.component').then((m) => m.HistoriaComponent),
  },
  {
    path: 'personajes/:id',
    loadComponent: () =>
      import('./personajes/personajes.component').then(
        (m) => m.PersonajesComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
