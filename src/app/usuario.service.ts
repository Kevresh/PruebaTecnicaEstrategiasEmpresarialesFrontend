import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //URL que obtiene la lista de todos los usuarios en el backend
  private baseURL = "http://localhost:8080/api/v1/usuarios";
  
  constructor(private httpClient: HttpClient) { }


  //Metodo para obtener los usuarios
  obtenerListaDeUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`);
  }

  //Metodo para registrar nuevos usuarios
  registrarUsuario(usuario:Usuario) : Observable<Object>{
    console.log(usuario);
    return this.httpClient.post<Usuario>(`${this.baseURL}`, usuario);
  }

  //Metodo para actualizar el usuario
  ActualizarUsuario(cedula:string, usuario:Usuario) : Observable<Usuario>{
    console.log(usuario);
    return this.httpClient.put<Usuario>(`${this.baseURL}/${cedula}`, usuario);
  }

  //Metodo para obtener o buscar un usuario
  ObtenerUsuarioPorCedula(cedula:string) : Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${cedula}`);
  }

  //Metodo para eliminar el usuario
  eliminarUsuario(cedula:string) : Observable<Object>{
    return this.httpClient.delete<Usuario>(`${this.baseURL}/${cedula}`);
  }
}
