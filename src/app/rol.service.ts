import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rol } from './rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  //URL que obtiene todos los roles desde el backend
  private baseURL = "http://localhost:8080/api/v1/roles";

  constructor(private httpClient : HttpClient) { }

  //Metodo para obtener los roles
  obtenerListaDeRoles():Observable<Rol[]>{
    return this.httpClient.get<Rol[]>(`${this.baseURL}`);
  }
}
