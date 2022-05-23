import { Injectable } from '@angular/core';
import { Product } from '../models/product';

import Service from '../services/services.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private service: Service) {}

  registerProduct(data: Product) {
    return this.service.postData('products', data);
  }

  listProducts(){
    return this.service.getData('products');
  }

  listSnacksProducts(){
    return this.service.getData('snacks');
  }

  listDrinksProducts(){
    return this.service.getData('drinks');
  }

}
