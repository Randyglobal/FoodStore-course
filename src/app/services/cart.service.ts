import { Injectable } from '@angular/core';
import { Cart } from '../shares/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shares/models/food';
import { CartItem } from '../shares/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Defining a field that holds the cart
  private cart: Cart = this.getFromLocalStorage()
  // behavior subject is a type of subject, a special type of observable in rxjs,
  // it keeps track of the current value and emits it to the new subscriber
  // The behaviorsubject represents a value that changes overtime while observables represents all the value over time
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart)
  constructor() { }
  // in the bracket we have the input parameter and returns void
  addToCart(food: Food): void {
    // When adding to the cart, you should be able to increase the quantity of the product
    // if the product is added twice , rather than adding the same products twice, Hence
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if (cartItem) {
      return;
    }
    this.cart.items.push(new CartItem(food));
    this.setToLocalStorage()
    alert('This is what has been pushed')
  }

  removeItem(foodId: string): void {
    this.cart.items = this.cart.items.filter(items => items.food.id != foodId)
    this.setToLocalStorage()
  
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if (!cartItem) {
      return
    }
    cartItem.quantity = quantity
    cartItem.price = quantity * cartItem.food.price
    this.setToLocalStorage()
  
  }

  clearCart() {
    this.cart = new Cart();
    this.setToLocalStorage()
  }
  // we get all the values and return as an observable
  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  // Local storage

  private setToLocalStorage():void{
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentSum) => 
    prevSum + currentSum.price, 0)
    this.cart.totalCount = this.cart.items
    .reduce((preSum, currentSum) => preSum + currentSum.quantity,0)
   const cartJson = JSON.stringify(this.cart)
   localStorage.setItem('Cart', cartJson)
  //  when we use the next function, we fire off an event that all subsribers will listen too
   this.cartSubject.next(this.cart);
  // console.log('This is the result from price and count',this.setToLocalStorage());
  //  console.log('This is cart Subject',this.cartSubject);
   
  }
  private getFromLocalStorage():Cart{
   const carJson = localStorage.getItem('Cart')
   return carJson? JSON.parse(carJson): new Cart()
  }
}
