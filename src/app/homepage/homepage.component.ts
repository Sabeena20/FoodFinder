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
  title = "Welcome to FoodFinder";
  buttons = ['Paleo', 'Ketogenic', 'Gluten Free', 'Vegan', 'Vegetarian', 'Dairy Free', 'Kosher'];
  products: Product[] = [];
  toShow: Boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  clickedADiet(event, selectedDiet) {
    // console.log(p);
    this.products = [];
    this.httpClient.get("assets/data/products.json").subscribe((data: Product[]) => {
      //console.log(data);

      for (let i = 0; i < data.length; i++) {
        //  let diets = data[i].diet;
        if (data[i].diet.includes(selectedDiet, 0)) {
          this.toShow = true;
          //console.log(data[i]);
          this.products.push(data[i]);
        }
      }
    })
  }
}
