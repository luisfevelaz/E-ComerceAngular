import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})


export class PhoneComponent implements OnInit {

  constructor(private _productsService: ProductsService) { }

  ArrayPhones: any[] =[];

  ngOnInit(): void {
    console.log('phoneWorks!!');
    
    this.ArrayPhones=this._productsService.getPhones();
    console.log(this.ArrayPhones);
    
  }

}
