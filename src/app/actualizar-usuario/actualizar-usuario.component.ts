import swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Empresa } from '../empresa';
import { EmpresaService } from '../empresa.service';
import { RolService } from '../rol.service';
import { Rol } from '../rol';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  cedula:string;
  usuario:Usuario = new Usuario();
  empresas: Empresa[];
  roles: Rol[];
  constructor(private usuarioService:UsuarioService, private router:Router, private route:ActivatedRoute, private empresaServicio:EmpresaService, private rolServicio:RolService) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
    this.obtenerRoles();
    this.cedula = this.route.snapshot.params['cedula'];
    this.usuarioService.ObtenerUsuarioPorCedula(this.cedula).subscribe(dato =>{
      this.usuario = dato as Usuario;
    }, error => console.log(error));
  }

  irAlaListaDeUsuarios(){
    this.router.navigate(['/usuarios']);
    swal.fire('Usuario Editado',`El empleado ${this.usuario.primernombre} ${this.usuario.primerapellido} ha sido Editado con exito`,`success`);
    
  }

  onSubmit(){
    this.usuarioService.ActualizarUsuario(this.cedula, this.usuario).subscribe(dato =>{
      this.usuario = dato
      this.irAlaListaDeUsuarios();
    }, error => console.log(error));
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
