import { Empresa } from "./empresa"
import { Rol } from "./rol"

export class Usuario {
    cedula: string
    clave: string
    email: string
    estado: number
    nitempresa: Empresa
    primerapellido: string
    primernombre: string
    rol: Rol
    segundoapellido: string
    segundonombre: string

}
