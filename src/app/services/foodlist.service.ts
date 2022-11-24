import { Injectable } from '@angular/core';
import { Food } from '../models/food';
import { Tag } from '../models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodlistService {

  constructor() { }

  getFoodById(id:number):Food{
   return this.getall().find(food=> food.id == id)!;
  }


  getAllFoodByTag(tag:string):Food[]{
    
    return tag=="All"?this.getall():this.getall().filter(food=>food.tags?.includes(tag));
  }

  getAllTag():Tag[]{

    return[
      {name: 'All', count:55},
      {name: 'FastFood',count:12}, 
      {name: 'Pizza',count:14},
       {name:'lunch',count:5},
        {name:'SlowFood',count:14},
      {name: 'Hamburger',count:8},
      {name: 'Fry',count:3},
       {name:'Soup',count:14},
    ];


  }

  getall():Food[]{
    return [
      {
      id:1,
      name:'Pizza papparani',
      cookTime:'20-30',
      price:450,
      favourite: true,
      origins:['italy','spain'],
      star:3.8,
      imageUrl:'/assets/pizza.jpg',
      tags:['FastFood','Pizza','lunch']
    },
    {
      id:2,
      name:'Meat roll',
      cookTime:'30-35',
      price:250,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:5,
      imageUrl:'/assets/mexican_food_recipes.jpg',
      tags:['SlowFood','lunch'] 
    },
    {
      id:3,
      name:'Mutton chicken',
      cookTime:'10-20',
      price:200,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:4.5,
      imageUrl:'/assets/5.jpeg',
      tags:['SlowFood','lunch','Fry'] 

    },
    {
      id:4,
      name:'Roti',
      cookTime:'20-25',
      price:200,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:4.5,
      imageUrl:'/assets/6.png',
      tags:['SlowFood','lunch'] 
    },
    {
      id:5,
      name:'Panipuri',
      cookTime:'5-10',
      price:70,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:4.2,
      imageUrl:'/assets/7.png',
      tags:['SlowFood','lunch'] 
    },
    {
      id:6,
      name:'biryani',
      cookTime:'2-3',
      price:20,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:5,
      imageUrl:'/assets/8.png',
      tags:['SlowFood','lunch'] 
    },
    {
      id:7,
      name:'chicken roast',
      cookTime:'10-20',
      price:100,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:3,
      imageUrl:'/assets/9.png',
      tags:['SlowFood','lunch'] 
    },
    {
      id:8,
      name:'leg Piece',
      cookTime:'15-20',
      price:120,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:4.5,
      imageUrl:'/assets/roll.png',
      tags:['SlowFood','lunch'] 
    },
    {
      id:9,
      name:'I dont know',
      cookTime:'5-10',
      price:150,
      favourite: false,
      origins:['mexico','columbia','spain'],
      star:4.8,
      imageUrl:'/assets/4.jpg',
      tags:['SlowFood','lunch'] 
    }

    ];
  }
}
