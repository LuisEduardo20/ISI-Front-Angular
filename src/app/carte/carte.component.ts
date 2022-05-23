import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {

  listSnacksProducts: Product[] = [];
  listDrinksProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchSnacksProducts();
    this.fetchDrinksProducts();
  }

  private fetchSnacksProducts(){
    this.productService.listSnacksProducts().subscribe(
      (data: Product[]) => {
        this.listSnacksProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private fetchDrinksProducts(){
    this.productService.listDrinksProducts().subscribe(
      (data: Product[]) => {
        this.listDrinksProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
