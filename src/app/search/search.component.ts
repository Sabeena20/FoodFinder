import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
import { ProductNew } from '../ProductNew';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  products: ProductNew[] = [];
  filterTerm: string;
  toShow : boolean = false;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  searchFilter() {
    
    this.products = [];
    console.log(this.filterTerm);
    this.httpClient.get("assets/data/products.json").subscribe((data: ProductNew[]) => {
      this.products = data;
      this.toShow = true;
      console.log(this.products);
    });
  }

}
