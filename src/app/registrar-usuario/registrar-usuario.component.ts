import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import { Rol } from '../rol';
import { RolService } from '../rol.service';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {

  usuario : Usuario = new Usuario();
  empresas: Empresa[];
  roles:Rol[];

  constructor(private empresaServicio:EmpresaService, private rolServicio:RolService, private usuarioServicio:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerRoles();
  }

  guardarUsuario(){
    this.usuarioServicio.registrarUsuario(this.usuario).subscribe(dato => {
      console.log(dato);
      this.ListaDeUsuarios();
    },error => console.log(error));
  }

  ListaDeUsuarios(){
    this.router.navigate(['/usuarios'])
    swal.fire('Usuario registrado',`El empleado ${this.usuario.primernombre} ${this.usuario.primerapellido} ha sido registrado con exito`,`success`);
  }
  ListaDeEmpresas(){
    this.router.navigate(['/empresas'])
  }
  ListaDeRoles(){
    this.router.navigate(['/roles'])
  }

  onSubmit(){
    console.log(this.usuario);
    this.guardarUsuario();
  }

  private obtenerEmpresas(){
    this.empresaServicio.obtenerListaDeEmpresas().subscribe(dato =>{
        this.empresas = dato;
    });
  }

  private obtenerRoles(){
    this.rolServicio.obtenerListaDeRoles().subscribe(dato => {
      this.roles = dato;
    });
  }
}
