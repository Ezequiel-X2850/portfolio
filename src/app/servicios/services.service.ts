import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient, private autenticacionServicio:AuthService ) { }

  direccion:String = 'https://springboot-api-production-c063.up.railway.app/api'; //./assets/json/dataTest.json

  obtenerDatos():Observable<any>{
    
    return this.http.get(this.direccion+'/ver/datos');
  }

  guardarDatos( dir:String, datos:any ):Observable<any>{
    const token = this.autenticacionServicio.UsuarioAutenticado;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.post( 'https://springboot-api-production-c063.up.railway.app/api' + dir, datos, { headers:header });
  }

  actualizarDatos(dir:String, datos:any):Observable<any>{
    const token = this.autenticacionServicio.UsuarioAutenticado;
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    })
    return this.http.put( 'https://springboot-api-production-c063.up.railway.app/api' + dir, datos, { headers:header });
  }

  eliminarDatos(dir:String):Observable<any>{
    const token = this.autenticacionServicio.UsuarioAutenticado;
    const header = new HttpHeaders({
      'Content-Type' : 'application/json',
      Authorization : `Bearer ${token}`
    })
    return this.http.delete('https://springboot-api-production-c063.up.railway.app/api'+ dir, { headers:header });
  }
}
