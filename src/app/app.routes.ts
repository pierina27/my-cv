import { RouterModule,Routes } from '@angular/router';

import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DatosPersonalesComponent } from './components/perfil/datos-personales/datos-personales.component';

const routes: Routes = [
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'perfil/:id', component: PerfilComponent,
    children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'datos-personales', component: DatosPersonalesComponent }
    ]
  },
  /*{ path: 'pokemon/:id', component: PokemonInfoComponent },
  { path: 'buscar/:nombre', component: BuscadorPokemonComponent },*/
  { path: '**', redirectTo:"perfiles" }

];

export const PERFIL_ROUTING = RouterModule.forRoot(routes);
