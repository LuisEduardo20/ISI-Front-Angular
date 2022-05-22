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

  postData(route: string, data: User): Observable<any> {
    return this.http.post(`${this.baseURL}/${route}`, data);
  }
}
