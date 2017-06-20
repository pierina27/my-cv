import { Component, OnInit } from '@angular/core';

import { PerfilService } from '../../services/perfil.service';
import { perfil } from '../../models/perfil';


@Component({
  selector: 'app-perfil',
  templateUrl: 'perfil.component.html',
  styleUrls: ['perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil:any = {};

  constructor(private _perfilService:PerfilService) { }

  ngOnInit() {

  }
  addPerfil(){
    console.log(this.perfil);
    this._perfilService.setLocalstoragePerfil(this.perfil);
  }
}
