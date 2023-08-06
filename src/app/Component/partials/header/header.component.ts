import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartQuantity = 0

  constructor(private cartService: CartService){
    // subscribe to the observable if anychange in count, give it to newCount
    cartService.getCartObservable().subscribe((newCount) => {
      this.cartQuantity = newCount.totalCount;
    })
  }

}
