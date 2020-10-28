import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-linea-b',
  templateUrl: './linea-b.component.html',
  styleUrls: ['./linea-b.component.css']
})
export class LineaBComponent implements OnInit {

  constructor(private _productsService:ProductsService, private _aRouter:Router) { }

  ArrayBlanca: any[] = [];

  ngOnInit(): void {
    this.ArrayBlanca = this._productsService.getBlanca();
  }

  getID(i){
    return this.ArrayBlanca[i].id;
  }

  Navegar(index) {
    console.log(index);
    this._aRouter.navigate(['/producto',index]);
  }

}
