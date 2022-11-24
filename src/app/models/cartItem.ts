import { Food } from "./food";

export class CartItem{
    food!:Food;
    quantity:number=1;
     constructor(food:Food){
        this.food=food;
        this.Price;
     }
     get Price():number{
        return  this.food.price*this.quantity;
     }
}