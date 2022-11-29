import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';
  cartItems: any = {};
  showCart = false;

  /**
   * adds a product item to the shopping cart,
   * increments the quantity if the product is already in cart.
   * @param item - a product item
   */
  addItem(item: any){
    if(item.sku in this.cartItems){
      this.cartItems[item.sku].qty += 1;
    } else{
      this.cartItems[item.sku] = item;
      this.cartItems[item.sku].qty = 1;
    }
  }

  /**
   * Returns the total amount of items in the shopping cart.
   */
  cartItemAmount(){
    var qty = 0;
    for(let key in this.cartItems){
      qty += this.cartItems[key].qty;
    }
    return qty;
  }

  /**
   * Shows/Hides the shopping cart view.
   */
  showHideCart(){
    this.showCart = !this.showCart;
  }
}
