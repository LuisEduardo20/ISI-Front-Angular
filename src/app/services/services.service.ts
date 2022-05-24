import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export default class ServicesService {
  public baseURL = `https://backend-seucaneco.herokuapp.com`;

  constructor(private http: HttpClient) {}

  postData(route: string, data: any): Observable<any> {
    return this.http.post(`${this.baseURL}/${route}`, data);
  }

  getData(route: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${route}`);
  }

  putData(route: string, data: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${route}`, data);
  }

  deleteData(route: string, id: number) {
    return this.http.delete(`${this.baseURL}/${route}/` + id).subscribe(() => window.location.reload());
  }
}
