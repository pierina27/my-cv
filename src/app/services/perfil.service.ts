import { Injectable } from '@angular/core';
import { perfil } from '../models/perfil';
import { LocalStorageService } from 'angular-2-local-storage';

@Injectable()
export class PerfilService{
  constructor (private localStorageService: LocalStorageService) {}

  perfiles:perfil[] = this.getLocalstoragePerfiles();
  /*perfiles:perfil[] = [{
    id: 1,
    nombre: "Pierina",
    apellido: "Zaramella",
    tipo_identificacion: "RUT",
    identificacion : "123456",
    nombre_perfil : "Desarrollad@r Móvil Híbrida",
    estado : "Activo",
    empresa : "Interno"
  },{
    id: 2,
    nombre: "Pierina",
    apellido: "Zaramella",
    tipo_identificacion: "RUT",
    identificacion : "123456",
    nombre_perfil : "Desarrollad@r Web FrontEnd",
    estado : "Inactivo",
    empresa : "Interno"
  }];*/

  getPerfiles(){
    return this.perfiles;
  }

  getPerfil(id:number):perfil{
    for(let perfil of this.perfiles){
      if(perfil.id == id){
        return perfil;
      }
    }
  }

  getLocalstoragePerfiles(){
    console.log(localStorage.getItem('perfil'))
    if(JSON.parse(localStorage.getItem('perfil'))){
      return JSON.parse(localStorage.getItem('perfil'));
    }else{
      return [];
    }
  }

  setLocalstoragePerfil(perfil:perfil){
    perfil.id = this.perfiles.length + 1;
    this.perfiles.push(perfil);
    console.log(this.perfiles);
    localStorage.setItem('perfil',JSON.stringify(this.perfiles));
  }

  updatePerfil(perfil:perfil){
    this.deletePerfil(perfil);
    this.setLocalstoragePerfil(perfil);
  }

  deletePerfil(perfil:perfil){
    for(var i = 0; i < this.perfiles.length; i++){
      if(this.perfiles[i].id == perfil.id){
        this.perfiles.splice(i, 1);
        return;
      }
    }
  }
}



