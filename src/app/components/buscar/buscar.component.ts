import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private _aRoute:ActivatedRoute, private _productsService:ProductsService) { }

  buscados: any=[];

  nombreP: string = "";
  ngOnInit(): void {
    this._aRoute.params.subscribe(params =>{
      //console.log(params['nombre']);
      this.nombreP = params['nombre'];
      this.buscados = this._productsService.buscaProductos(params['nombre']);
      console.log(this.buscados);
      
    });
  }

}
