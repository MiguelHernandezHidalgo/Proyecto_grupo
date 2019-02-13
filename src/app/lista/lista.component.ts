import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';
import { Portfolio } from '../portfolio';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {
  arrayPortfolios: Array<Portfolio>;

  constructor(private servicioP: PortfoliosService) { }

  ngOnInit() {
    this.actualizar();
  }
  actualizar():void{
    this.arrayPortfolios=this.servicioP.listar();
  }
}
