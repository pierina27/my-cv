import { Component, OnInit } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { perfil } from '../../models/perfil';


@Component({
  selector: 'app-perfiles',
  templateUrl: 'perfiles.component.html',
  styleUrls: ['perfiles.component.css']
})
export class PerfilesComponent implements OnInit {
  perfiles:perfil[] = [];

  constructor(private _perfilService:PerfilService) { }

  ngOnInit() {
    this.perfiles = this._perfilService.getPerfiles();
    console.log(this._perfilService.getPerfiles());
  }

}
