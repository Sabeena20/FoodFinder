import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Event } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = "FoodFinder";
  buttons = ['Paleo', 'Ketogenic', 'Gluten Free', 'Vegan', 'Vegetarian', 'Dairy Free', 'Kosher'];
  products: Product[] = [];
  toShow: Boolean = false;
  toShowDiet:Boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  clickedADiet(event, selectedDiet) {
    this.products = [];
    this.httpClient.get("assets/data/products.json").subscribe((data: Product[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].diet.includes(selectedDiet, 0)) {
          this.toShow = true;
          this.products.push(data[i]);
        } 
      }
    })
  }

 clickedAll() {
  this.products = [];
  // console.log(this.filterTerm);
  this.httpClient.get("assets/data/products.json").subscribe((data: Product[]) => {
    this.products = data;
    this.toShow = true;
    this.toShowDiet = true;
 });
}
}

