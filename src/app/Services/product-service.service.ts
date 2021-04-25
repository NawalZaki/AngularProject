import { Injectable } from '@angular/core';
import { IProduct } from '../SharedClassesandtypes/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  ProductList : IProduct[] =[]; 
  constructor() { 
    this.ProductList= [
      { ID: 1, Name: "Product1" , Quantity: 4 , Price:9990 , Img:""},
      { ID: 2, Name: "Product2" , Quantity: 8 , Price:8880 , Img:""},
      { ID: 3, Name: "Product3" , Quantity: 5 , Price:10090 , Img:""},
      { ID: 4, Name: "Product4" , Quantity: 8 , Price:4290 , Img:""}
      
        ];  
  }

  GetAllProducts():IProduct[]
  {
     return this.ProductList;
  }   

   getProductByID(pID:number)
  {
    for(var p of this.ProductList)
    {
      if(p.ID==pID)
        return p;
    }
   
  } 
}








  



    

 
