import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = `http://localhost:3333/login`

  constructor(private http: HttpClient) { }

  postData(data:User): Observable<any>{
    return this.http.post(this.baseURL, data);
  }
}
