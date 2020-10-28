import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})


export class PhoneComponent implements OnInit {

  constructor(private _productsService: ProductsService, private _aRouter:Router) { }

  ArrayPhones: any[] =[];

  ngOnInit(): void {
    console.log('phoneWorks!!');
    
    this.ArrayPhones=this._productsService.getPhones();
    console.log(this.ArrayPhones);
    
  }

  getID(i){
    return this.ArrayPhones[i].id;
  }

  Navegar(index) {
    console.log(index);
    this._aRouter.navigate(['/producto',index]);
  }

}
