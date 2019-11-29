import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Homeservice } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private homeservice: Homeservice) { }

  pName: string = "";
  origin: string = "";
  productDetail: any[];
  ngOnInit() {
    this.getProducts();
  }

  getProducts(): any {
    this.homeservice.getProduct()
      .subscribe(data => {
        this.productDetail = data.products;
      })
  }
  addProduct(): void {
    if (this.pName !== "" && this.origin !== "") {
      this.productDetail.push({ pName: this.pName, pDetail: this.origin });
      this.pName = "";
      this.origin = "";
      alert("product added successfully");
    }
    else
      alert("Enter Product Detail")
  }



}
