import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  foodlists:Food[]=[];
  rating!:number;


  constructor(private fs:FoodlistService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.foodlists=this.fs.getall();
    this.router.params.subscribe(params=>{
      if(params['searchItem'])
       this.foodlists=this.fs.getall().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()))
       else if(params['tag'])
       this.foodlists=this.fs.getAllFoodByTag(params['tag'])
       else
     this.foodlists=this.fs.getall();
    })
  
  }

}
