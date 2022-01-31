import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductNew } from '../ProductNew';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  title = "FoodFinder";
  buttons = ['Paleo', 'Ketogenic', 'Gluten Free', 'Vegan', 'Vegetarian', 'Dairy Free', 'Kosher'];
  products: ProductNew[] = [];
  toShow: Boolean = false;
  toShowDiet: Boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  clickedADiet(event, selectedDiet) {
    this.products = [];
    this.httpClient.get("https://localhost:44393/api/Values").subscribe((data: ProductNew[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].diet.includes(selectedDiet, 0)) {
          data[i].image = 'assets/images/' + data[i].image ;
          this.toShow = true;
          this.products.push(data[i]);
          
        }
      }
    })
  }

  clickedAll() {
    this.products = [];
    // console.log(this.filterTerm);
    this.httpClient.get("https://localhost:44393/api/Values").subscribe((data: ProductNew[]) => {
      for (let i = 0; i < data.length; i++) {
              data[i].image = 'assets/images/' + data[i].image ;
            }
      this.products = data;
      this.toShow = true;
      this.toShowDiet = true;
    });
  }
}

