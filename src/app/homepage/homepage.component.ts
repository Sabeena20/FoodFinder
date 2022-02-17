import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
import { ProductNew } from '../ProductNew';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

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
  
  isLoggedIn: Boolean = false;
  // logon
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private httpClient: HttpClient,  private router: Router) {
 
   }

  ngOnInit() {
    this.currentUserSubject = new BehaviorSubject<any>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
    console.log(this.currentUserSubject.value);
    if (!this.currentUserSubject.value) {
      console.log("in");
      this.isLoggedIn = false;
      this.router.navigate(['/logon']);
   } else {
    this.isLoggedIn = true;
   }
  }
  clickedADiet(event, selectedDiet) {
    this.products = [];
    this.httpClient.get("https://localhost:44393/api/Values").subscribe((data: ProductNew[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].diet.includes(selectedDiet, 0)) {
          data[i].image = 'assets/images/' + data[i].image;
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
        data[i].image = 'assets/images/' + data[i].image;
      }
      this.products = data;
      this.toShow = true;
    });
  }
}

