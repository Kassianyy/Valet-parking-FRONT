import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {

  private URL_BACKEND = environment.URL_BACKEND;

  constructor(private http:HttpClient) { }

  Login():Observable<any>{

    return this.http.get(`${this.URL_BACKEND}/api/auth`);// modificarlo para que sea body

  }

  createUser(data: any): Observable<any> {
    return this.http.post(`${this.URL_BACKEND}/api/auth/register`, data);
  }
}
