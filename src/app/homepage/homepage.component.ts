import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Event } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title="Welcome to FoodFinder";
  buttons = ['Paleo','Ketogenic','Gluten Free','Vegan','Vegetarian','Dairy Free','Kosher'];
  product:Product[] = [];

  constructor() { }

  ngOnInit() {
  }
  clickedPaleo(event,product){
    console.log(product);
  }
}
