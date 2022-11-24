import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/models/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {
food!:Food;
  constructor(private activeRoute:ActivatedRoute, private foodService:FoodlistService,private cartService:CartService,private router:Router) {
      activeRoute.params.subscribe((params)=>{
      if(params['id'])
      this.food=foodService.getFoodById(params['id']);
    })
   }

  ngOnInit():void{
  }
  addTCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
