import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Producto } from "./models/Producto";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  baseUrl  = "https://medil.com.ar/visualizador";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.baseUrl + "/obtenerProductos.php"); 
  }
}
