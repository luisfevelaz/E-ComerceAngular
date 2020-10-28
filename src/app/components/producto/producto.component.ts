import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  verProducto: any = {};
  flag = true;
  arrayMeses = [];
  constructor(private _aRouter:ActivatedRoute, private _productsService:ProductsService) {
    this._aRouter.params.subscribe(params => {
      console.log(params); 
      
      this.verProducto = this._productsService.getProducto(params['id']); 
      if(this.verProducto.msi == false ){
        this.flag = false;
      }else{
        this.arrayMeses = this.verProducto.meses;
      }
      //console.log(this.verProducto);
      
    })
  }

  ngOnInit(): void {
  }

}
