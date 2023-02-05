import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  //Url que obtiene el listado de las empresas
  private baseURL = "http://localhost:8080/api/v1/empresas";

  constructor(private httpClient : HttpClient) { }

  //Metodo que obtiene el listado de empresas
  obtenerListaDeEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(`${this.baseURL}`)
  }

}
