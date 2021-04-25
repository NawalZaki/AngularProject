import { Component, OnInit } from '@angular/core';
import {DiscountOffers } from '../SharedClassesandtypes/discount-offers.enum';
import { IProduct } from '../SharedClassesandtypes/Iproduct';
import {ICategory} from '../SharedClassesandtypes/Icategory';
import{ProductServiceService} from '../Services/product-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  StoreName:string;
  StoreLogo:string; 
  ClientName:string;
  IsPurshased:Boolean;
  ProductList:IProduct[];
  CategoryList: ICategory[];
  Discount:DiscountOffers;
  flag:boolean=false;
  constructor(private productService:ProductServiceService,
    private activatedRoute:ActivatedRoute,private router:Router) 
  {
   this.CategoryList = [ 

      { ID: 1, Name: "Bags" },
      { ID: 2, Name: "Accessories" },
    ];
   this.ProductList = [ 
   { ID: 1, Name: "Product1" , Quantity: 4 , Price:9990 , Img:""},
   { ID: 2, Name: "Product2" , Quantity: 8 , Price:8880 , Img:""},
   { ID: 3, Name: "Product3" , Quantity: 5 , Price:10090 , Img:""},
   { ID: 4, Name: "Product4" , Quantity: 8 , Price:4290 , Img:""}
  ];
    this.Discount=DiscountOffers.First_Disscount;
    this.ClientName="";
    this.IsPurshased=false;
    this.StoreName="HandMade";
    this.StoreLogo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqR0iDjSE9tUowweconA6CTQaPfdnlc15Sw&usqp=CAU";
  } 
  ngOnInit(): void {
  }
 
  Bye()
  {
    if(this.IsPurshased==true)
    {
      this.IsPurshased=false;
    }
    else
    {
      this.IsPurshased=true;
    }
  }
  RenderValues()
  { 
      this.ProductList=this.productService.GetAllProducts();  
      this.IsPurshased=true; 
  } 
  RenderValues2(ID:number)
  { 
      this.ProductList=[];
      var Product=this.productService.getProductByID(ID);  
      if(Product!=null)
      {
        return this.ProductList.push(Product);
      }
      this.IsPurshased=true; 
  } 
  
  ProductsWithDiscount()
  {
    this.router.navigate(['productwithDiscount'],{relativeTo:this.activatedRoute})
  }

  ProductsWithOutDiscount()
  {
    this.router.navigate(['productwithOutDiscount'],{relativeTo:this.activatedRoute})
  }
}
