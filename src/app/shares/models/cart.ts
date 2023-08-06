import { CartItem } from "./cartItem";

export class Cart{
    // importing the cartItem here enables us to 
    // access all what is in the caritem and as such we can use
    // them to calculate what is needed
    items: CartItem[] = [];
    totalPrice: number = 0;
    totalCount: number = 0;
}