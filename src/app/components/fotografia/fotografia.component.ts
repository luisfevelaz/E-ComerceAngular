import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {

  constructor(private _productsService:ProductsService, private _aRouter:Router) { }
  ArrayCam: any[] =[];

  ngOnInit(): void {
    this.ArrayCam = this._productsService.getCam();
  }

  getID(i){
    return this.ArrayCam[i].id;
  }

  Navegar(index) {
    console.log(index);
    this._aRouter.navigate(['/producto',index]);
  }

}
