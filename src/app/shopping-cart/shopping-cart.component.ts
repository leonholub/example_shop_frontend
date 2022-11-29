import {Component, Input, Pipe, PipeTransform} from '@angular/core';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  @Input() cartItems: any;
  default_delivery_fee = 8;

  /**
   * Calculates the delivery fee of the order.
   */
  delivery_fee(): number{
    if(!this.cartIsEmpty()){
      return this.default_delivery_fee;
    } else{
      return 0;
    }
  };

  /**
   * Calculates the interim sum of the order
   * (price of all products without shipping and tax).
   */
  interim_sum(): number{
    var interim_sum = 0;
    for(let key in this.cartItems){
      interim_sum += this.cartItems[key].qty * this.cartItems[key].price;
    }
    return interim_sum;
  };

  /**
   * Calculates the tax of the order.
   * TODO: Handle varying tax rates of different product types.
   */
  tax(): number{
    return this.interim_sum() * 0.19;
  };

  /**
   * Calculates the total sum of the order (price including shipping and tax).
   */
  total_sum(): number{
    return this.interim_sum() + this.tax() + this.delivery_fee();
  };

  /**
   * Mockup function for a checkout process.
   * TODO: Implement checkout
   */
  goToCheckout(){
    if(this.cartIsEmpty()){
      alert("Ihr Warenkorb ist leer.");
    } else {
      alert("Vielen Dank für Ihren Einkauf.");
    }
  };

  /**
   * Returns boolean value if the cart is empty.
   */
  cartIsEmpty(): boolean{
    return Object.keys(this.cartItems).length === 0;
  };
}
