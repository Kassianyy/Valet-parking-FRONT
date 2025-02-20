import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = 'http://localhost:5000/api/vehiculos/vehiculos';

  private apiUrlCoches = 'http://localhost:5000/api/vehiculos/coches';


    constructor(private http: HttpClient) { }

registrarVehiculo(formData: FormData) {
  const headers = new HttpHeaders();
  return this.http.post(this.apiUrl, formData); // Sin `headers` (Angular lo maneja automáticamente)
}
obtenerVehiculos(): Observable < any[] > {
  return this.http.get<any[]>(this.apiUrl);
}
}
