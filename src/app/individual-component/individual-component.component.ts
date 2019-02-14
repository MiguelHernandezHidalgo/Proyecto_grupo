import { Component, OnInit } from '@angular/core';
import { PortfoliosService } from '../portfolios.service';
import { Portfolio } from 'app/portfolio';

@Component({
  selector: 'app-individual-component',
  templateUrl: './individual-component.component.html',
  styleUrls: ['./individual-component.component.css']
})
export class IndividualComponentComponent implements OnInit {
  portfolioActual : Portfolio;
  pos:number;
  constructor(public ps:PortfoliosService) {
  }

  ngOnInit() {
    this.pos=0;
    this.portfolioActual=this.ps.listar()[this.pos];

  }
  sig() {
    this.pos++;
    this.portfolioActual=this.ps.listar()[this.pos];
  }
  ant() {
    this.pos--;
    this.portfolioActual=this.ps.listar()[this.pos];
  }

}
