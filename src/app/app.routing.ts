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
      import('./universo/historia/historia.component').then(
        (m) => m.HistoriaComponent
      ),
  },
  {
    path: 'universo/sociedad/:id',
    loadComponent: () =>
      import('./universo/sociedad/sociedad.component').then(
        (m) => m.SociedadComponent
      ),
  },
  {
    path: 'universo/sociedad/alienigenas/:id',
    loadComponent: () =>
      import('./universo/sociedad/alienigenas/alienigenas.component').then(
        (m) => m.AlienigenasComponent
      ),
  },
  {
    path: 'universo/sociedad/casas-nobles/:id',
    loadComponent: () =>
      import('./universo/sociedad/casas-nobles/casas-nobles').then(
        (m) => m.CasasNoblesComponent
      ),
  },
  {
    path: 'universo/sociedad/la-iglesia-universal-del-sol-celestial/:id',
    loadComponent: () =>
      import(
        './universo/sociedad/la-iglesia-universal-del-sol-celestial/la-iglesia-universal-del-sol-celestial.component'
      ).then((m) => m.LaIglesiaUniversalDelSolCelestialComponent),
  },
  {
    path: 'universo/sociedad/los-gremios/:id',
    loadComponent: () =>
      import('./universo/sociedad/los-gremios/los-gremios.component').then(
        (m) => m.LosGremiosComponent
      ),
  },
  {
    path: 'reglas/:id',
    loadComponent: () =>
      import('./reglas/reglas.component').then((m) => m.ReglasComponent),
  },
  {
    path: 'reglas/interpretando-las-reglas/:id',
    loadComponent: () =>
      import(
        './reglas/interpretando-las-reglas/interpretando-las-reglas.component'
      ).then((m) => m.InterpretandoLasReglasComponent),
  },
  {
    path: 'reglas/acciones/:id',
    loadComponent: () =>
      import('./reglas/acciones/acciones.component').then(
        (m) => m.AccionesComponent
      ),
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
