import { Component, ViewChild } from '@angular/core';
import { ProductsComponent } from './products/products.component';
import {IProduct} from './SharedClassesandtypes/iproduct'

@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
   @ViewChild(ProductsComponent) pro :ProductsComponent;
   
    show()
    {
      this.pro.RenderValues();
    }

    show2(ID:number)
    {
      this.pro.RenderValues2(ID);
    }
}
