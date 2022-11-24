import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51LRYEwB2I6xufuGbkYhuJAuBAq3ft5ScyqFrxGbRee9yWX2Eet3PHkn4Wt63W3CIbqtZsPsgVNKhjlAeyjMiN4H000V7dZeTXS';

  constructor(private cartService:CartService,private foodService:FoodlistService) { 
    this.setCart();
    this.invokeStripe();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart=this.cartService.getCart();
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem,quantityInString:string){
    const quantity=parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Credit Card Payment',
      description: 'Fast'
      
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
  
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  }

}
