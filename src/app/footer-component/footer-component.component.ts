import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {
  logotipo:string;
  inicio:string;
  sobre:string;
  soporte:string;
  contacto:string;
  derechos:string;
  constructor() {
  }

  ngOnInit() {
    this.logotipo= ' LOGO ';
    this.inicio= 'Inicio';
    this.sobre='Sobre nosotros';
    this.soporte='Soporte técnico';
    this.contacto='Contáctenos';
    this.derechos='© 2019 Daniel, Miguel, Lucía, Bea y Guillermo';
  }

}
