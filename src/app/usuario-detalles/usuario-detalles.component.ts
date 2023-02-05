import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html',
  styleUrls: ['./usuario-detalles.component.css']
})
export class UsuarioDetallesComponent implements OnInit {

  cedula:string;
  usuario: Usuario;

  constructor(private route:ActivatedRoute, private usuarioServicio:UsuarioService) { }

  ngOnInit(): void {
    this.cedula = this.route.snapshot.params['cedula'];
    this.usuario = new Usuario();
    this.usuarioServicio.ObtenerUsuarioPorCedula(this.cedula).subscribe(dato =>{
      this.usuario = dato;
      swal.fire(`Detalles del Usuario ${this.usuario.primernombre} ${this.usuario.segundonombre}`)
    });
  }

}
