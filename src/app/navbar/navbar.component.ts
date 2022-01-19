import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from '@angular/common/http';
// import { Pipe,PipeTransform } from '@angular/core'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  products: Product[] = [];
  // searchTerm: string;
  filterTerm: string;
  toShow : boolean = false;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }
  searchFilter() {
    this.products = [];
    console.log(this.filterTerm);
    this.httpClient.get("assets/data/products.json").subscribe((data: Product[]) => {
      this.products = data;
      this.toShow = true;
      console.log(this.products);
    });
  }
}


