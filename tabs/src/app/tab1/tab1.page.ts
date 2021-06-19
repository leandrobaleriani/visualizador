import { ProductosService } from './../productos.service';
import { Producto } from './../models/Producto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imagen = "https://catalogo-bodega.netlify.app/assets/img/red-wine-test.jpg";
  productos: Producto[] = [];

  constructor(private prodService: ProductosService) {
    this.getProductos();
  }

  getProductos() {
    this.prodService.getAll().subscribe(data => this.productos = data);
  }
}
