import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  usuarios:Usuario[];

  constructor(private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  private obtenerUsuarios(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  actualizarUsuario(cedula:string){
    this.router.navigate(['actualizar-usuario',cedula]);
  }

  eliminarUsuario(cedula:string){
    this.usuarioServicio.eliminarUsuario(cedula).subscribe(dato => {
      console.log(dato);
      this.obtenerUsuario();
    })
  }

  private obtenerUsuario(){
    this.usuarioServicio.obtenerListaDeUsuarios().subscribe(dato => {
      this.usuarios = dato;
    });
  }

  verDetallesUsuario(cedula:string){
    this.router.navigate(['usuario-detalles', cedula]);
  }
}
