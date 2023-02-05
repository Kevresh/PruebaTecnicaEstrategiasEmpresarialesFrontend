import { Component, OnInit } from '@angular/core';
import { Rol } from '../rol';
import { RolService } from '../rol.service';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit {

  roles:Rol[];

  constructor(private rolesServicio:RolService) { }

  ngOnInit(): void {
    this.obtenerRoles();
  }

  private obtenerRoles(){
    this.rolesServicio.obtenerListaDeRoles().subscribe(dato => {
      this.roles = dato;
    });
  }
}
