import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-linea-b',
  templateUrl: './linea-b.component.html',
  styleUrls: ['./linea-b.component.css']
})
export class LineaBComponent implements OnInit {

  constructor(private _productsService:ProductsService) { }

  ArrayBlanca: any[] = [];

  ngOnInit(): void {
    this.ArrayBlanca = this._productsService.getBlanca();
  }

}
