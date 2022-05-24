import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-modal-product',
  templateUrl: './modal-product.component.html',
  styleUrls: ['./modal-product.component.scss']
})
export class ModalProductComponent implements OnInit {

  productForm!: FormGroup;
  @Input() product: Product | undefined;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      codigo: new FormControl(this.product ? this.product.codigo : ''),
      nome: new FormControl(this.product ?  this.product.nome : ''),
      nome_fornecedor: new FormControl(this.product ? this.product.nome_fornecedor  : ''),
      email_fornecedor: new FormControl(this.product ? this.product.email_fornecedor  : ''),
      tipo: new FormControl(this.product ? this.product.tipo  : ''),
      preco: new FormControl(this.product ? this.product.preco  : ''),
    })
  }

  register():void{
    if(this.product){
      this.productService.updateProduct(this.product, this.productForm.value);
    }else{
      this.productService.registerProduct(this.productForm.value).subscribe(response=>{
        console.log(response);
        window.location.reload();
      }, error =>{
        alert (error.error.message);
      })
    }
  }

}
