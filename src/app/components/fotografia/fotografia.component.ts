import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  constructor(private _productsService:ProductsService) { }
  ArrayCam: any[] =[];

  ngOnInit(): void {
    this.ArrayCam = this._productsService.getCam();
  }

}
