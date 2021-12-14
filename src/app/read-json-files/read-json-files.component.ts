import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-read-json-files',
  templateUrl: './read-json-files.component.html',
  styleUrls: ['./read-json-files.component.css']
})
export class ReadJsonFilesComponent implements OnInit {
  products: Product[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get("assets/data/products.json").subscribe((data:Product[]) => {
      console.log(data);
      this.products = data;
      console.log(this.products.length);
    })
  }
}
