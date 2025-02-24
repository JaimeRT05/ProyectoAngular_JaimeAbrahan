import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  
  private apiUrl = 'http://localhost:9999/api/mascotas'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerMascotasPorUsuario(usuarioId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${usuarioId}`);
  }

  obtenerTodasLasMascotas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }
  

  registrarMascota(mascota: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, mascota);
  }

  actualizarMascota(id: number, mascota: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, mascota);
  }

  eliminarMascota(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
