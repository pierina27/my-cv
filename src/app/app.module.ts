import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PerfilService } from './services/perfil.service';
import { FormsModule } from '@angular/forms';
//Rutas
import { PERFIL_ROUTING }  from "./app.routes";
import { PerfilesComponent } from './components/perfiles/perfiles.component';
import { DatosPersonalesComponent } from './components/perfil/datos-personales/datos-personales.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PerfilComponent,
    PerfilesComponent,
    DatosPersonalesComponent
  ],
  imports: [
    BrowserModule,
    PERFIL_ROUTING,
    LocalStorageModule.withConfig({
      prefix: 'my-cv',
      storageType: 'localStorage'
    }),
    FormsModule
  ],
  providers: [ PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
