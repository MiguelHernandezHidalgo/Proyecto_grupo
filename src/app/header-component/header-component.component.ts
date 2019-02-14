import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  estaActivo: boolean;
  constructor() { }

  ngOnInit() {
    this.estaActivo = true;
  }
  quitarActivo() {
    this.estaActivo = false;
  }
}
