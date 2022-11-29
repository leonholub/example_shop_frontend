import { Component, Output, EventEmitter } from '@angular/core';
import {default_products} from "../products";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = default_products;
  @Output() addToCartEvent = new EventEmitter<string>();

  /**
   * Add a product to cart
   * @param value: product type
   */
  putToCart(value: any){
    this.addToCartEvent.emit(value);
  }
}
