import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tags';
import { FoodlistService } from 'src/app/services/foodlist.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent?:string='center'

  tagss?:Tag[]=[];

  constructor(private fs:FoodlistService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tagss=this.fs.getAllTag();
  }

}
