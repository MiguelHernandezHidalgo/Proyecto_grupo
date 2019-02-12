import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';

@Component({
  selector: 'app-form-alta',
  templateUrl: './form-alta.component.html',
  styleUrls: ['./form-alta.component.css']
})
export class FormAltaComponent implements OnInit {
  titulo: string;
  etiqueta_nombre:string;
  placeholder_nombre: string;
  nombre_introducido: string;

  etiqueta_descr:string;
  descr_introducida:string;

  etiqueta_fich:string;
  placeholder_fich:string;
  fich_introducido:string;

  servPortfolios: PortfoliosService;

  constructor(sp: PortfoliosService) {
    this.servPortfolios=sp;
  }

  ngOnInit() {
    this.titulo="Alta de portfolios";
    this.etiqueta_nombre="Nombre y apellidos";
    this.placeholder_nombre="Introduzca nombre y apellidos";
    this.nombre_introducido="Gozer el gozeriano";

    this.etiqueta_descr="Descripción";
    this.descr_introducida="Mi portfolio1";

    this.etiqueta_fich="Currículum (Opcional)";
    this.placeholder_fich="miCV.doc(o pdf)";
    this.fich_introducido="UnCvCualquiera.pdf";
  }
  limpiar(){
    this.nombre_introducido="";
    this.descr_introducida="";
    this.fich_introducido="";
  }
  darDeAlta(){
    this.servPortfolios.alta(this.nombre_introducido, this.descr_introducida, this.fich_introducido);
    console.log("<<< Se supone que ha dado de alta >>>");
  }
}
