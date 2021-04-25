import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from '../SharedClassesandTypes/discount-offers.enum';
import { IProduct } from '../SharedClassesandTypes/IProduct';

@Component({
  selector: 'app-productwith-out-discount',
  templateUrl: './productwith-out-discount.component.html',
  styleUrls: ['./productwith-out-discount.component.scss']
})
export class ProductwithOutDiscountComponent implements OnInit {
  ProductList: IProduct[] = [];
  Discount:DiscountOffers;

  constructor() {    
    this.ProductList = [ 
      { ID: 1, Name: "Product1" , Quantity: 4 , Price:9990 , Img:""},
      { ID: 2, Name: "Product2" , Quantity: 8 , Price:8880 , Img:""},
      { ID: 3, Name: "Product3" , Quantity: 5 , Price:10090 , Img:""},
      { ID: 4, Name: "Product4" , Quantity: 8 , Price:4290 , Img:""}];
    this.Discount = DiscountOffers.First_Disscount;

   }

  ngOnInit(): void {
  }

}
