import { Component } from "@angular/core";


@Component({
    selector:"app-productos",
    templateUrl:"./productos.component.html",
    styleUrls:["./productos.component.css"]
})

export class ProductosComponent{
//Variables del ngmodel----
    nombreNuevo:string="";
    calidadNuevo:string="";
    precioNuevo:number;

    //------

    variableCalidad=false;
    filtroCalidad="bajo";

  productos=[
            {nombre:"harina",calidad:"alto",precio:12},
            {nombre:"yerba",calidad:"bajo",precio:3},
            {nombre:"cafe",calidad:"alto",precio:41},
            {nombre:"azucar",calidad:"medio",precio:14},
            {nombre:"sal",calidad:"bajo",precio:1},
        ];
    
        agregarProducto(){
            this.productos.push({
                nombre:this.nombreNuevo,
                calidad:this.calidadNuevo,
                precio:this.precioNuevo
            })
            this.nombreNuevo="";
            this.calidadNuevo="";
            this.precioNuevo=0;

        }

    
    verificarCalidad(productoCalidad:string){
        if(this.variableCalidad){
            return  productoCalidad != this.filtroCalidad
        }else{
            return true
        }
    }

    cambiarCalidad(){
        this.variableCalidad =! this.variableCalidad
      }

}