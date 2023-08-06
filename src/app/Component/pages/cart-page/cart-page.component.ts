import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shares/models/cart';
import { CartItem } from 'src/app/shares/models/cartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  // here we create a variable to hold the cart data
  Cart!: Cart
  constructor(private cartS: CartService){
  //  We want to use the cartService to get the cart observable and update the Cart! each time we have a new value(since
  // the observable contains all the values over time)
  this.cartS.getCartObservable().subscribe((cart) => {
    this.Cart = cart
  })
  }

  removeFromCart(cartItem: CartItem){
   this.cartS.removeItem(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityString: string){
    // first we convert the quantity from string to number
    const quantity = parseInt(quantityString)
    this.cartS.changeQuantity(cartItem.food.id, quantity)
  }

}
