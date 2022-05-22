import { Injectable } from '@angular/core';
import { User } from '../models/user';

import Service from '../services/services.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private service: Service) {}

  postData(data: User) {
    return this.service.postData('login', data);
  }

  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
