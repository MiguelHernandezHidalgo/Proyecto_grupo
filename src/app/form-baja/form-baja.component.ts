import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';
import { Portfolio } from '../portfolio';

@Component({
  selector: 'app-form-baja',
  templateUrl: './form-baja.component.html',
  styleUrls: ['./form-baja.component.css']
})
export class FormBajaComponent implements OnInit {
  titulo:string;
  nombre_introducido: string;

  private arrayPortfolios: Array<Portfolio>;

  servPortfolios: PortfoliosService;
  constructor(sp: PortfoliosService) {
    this.servPortfolios=sp;
  }

  ngOnInit() {
    this.titulo="Baja de portfolio";
    this.nombre_introducido="Gozer el gozeriano";

    this.arrayPortfolios=this.servPortfolios.listar()
  }
  darDeBaja(){
    this.servPortfolios.baja(this.nombre_introducido);
    console.log("<<< Se supone que ha dado baja >>>");
  }
  cambiarCampoForm(nombre:string):void{
    alert(nombre);
  }
}
