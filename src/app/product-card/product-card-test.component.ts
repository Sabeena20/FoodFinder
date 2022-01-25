import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-product-card-test',
  templateUrl: './product-card-test.component.html',
  styleUrls: ['./product-card-test.component.css']
})
export class ProductCardTestComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpClient:HttpClient ) { }

  ngOnInit(): void {
    this.products = [];
    // console.log(this.filterTerm);
    this.httpClient.get("assets/data/products.json").subscribe((data: Product[]) => {
      this.products = data;
  });
  }
}
