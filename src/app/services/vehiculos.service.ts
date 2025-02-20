import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl = `${environment.URL_BACKEND}/api/vehiculos/vehiculos`;

  private apiUrlCoches = `${environment.URL_BACKEND}/api/vehiculos/coches`;


    constructor(private http: HttpClient) { }

registrarVehiculo(formData: FormData) {
  const headers = new HttpHeaders();
  return this.http.post(this.apiUrl, formData); 
}
obtenerVehiculos(): Observable < any[] > {
  return this.http.get<any[]>(this.apiUrl);
}
}
