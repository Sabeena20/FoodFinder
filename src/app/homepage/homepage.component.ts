import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title="Welcome to FoodFinder";
  buttons = ['Paleo','Ketogenic','Gluten Free','Vegan','Vegetarian','Dairy Free','Organic','Nut free','Kosher'];

  constructor() { }

  ngOnInit() {
  }

}
