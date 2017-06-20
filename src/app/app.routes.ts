import { RouterModule,Routes } from '@angular/router';

import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  { path: 'perfiles', component: PerfilesComponent },
  { path: 'perfil', component: PerfilComponent },
 /* { path: 'pokemones', component: PokemonesComponent },
  { path: 'pokemon/:id', component: PokemonInfoComponent },
  { path: 'buscar/:nombre', component: BuscadorPokemonComponent },*/
  { path: '**', redirectTo:"perfiles" }

];

export const PERFIL_ROUTING = RouterModule.forRoot(routes);
