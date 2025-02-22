import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = 'http://localhost:9999/api/usuarios'; 

  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: any): Observable<any> {
    console.log('Enviando usuario al backend:', usuario);
    return this.http.post(this.apiUrl, usuario);
  }
  obtenerUsuarios(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
