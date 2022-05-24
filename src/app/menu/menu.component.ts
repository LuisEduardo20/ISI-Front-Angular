import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  listSnacksProducts: Product[] = [];
  listDrinksProducts: Product[] = [];
  modalState: boolean | unknown;
  logged: boolean | unknown;
  product: Product | undefined;

  constructor(private productService: ProductService, private userService: UserService) { }

  ngOnInit(): void {
    this.fetchSnacksProducts();
    this.fetchDrinksProducts();
    this.logged = this.userService.logged;
  }

  private fetchSnacksProducts() {
    this.productService.listSnacksProducts().subscribe(
      (data: Product[]) => {
        this.listSnacksProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private fetchDrinksProducts() {
    this.productService.listDrinksProducts().subscribe(
      (data: Product[]) => {
        this.listDrinksProducts = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  openModal(): void {
    this.modalState = true;
  }

  destroy(data: Product):void{
    this.productService.deleteProduct(data.id);
  }

  edit(data:Product):void{
    this.modalState = true;
    this.product = data;
  }

}
