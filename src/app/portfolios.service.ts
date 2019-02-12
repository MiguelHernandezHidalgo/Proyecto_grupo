import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';
import { runInThisContext } from 'vm';

@Injectable()
export class PortfoliosService {

  lista: Array<Portfolio>;

  constructor() {
    console.log("<<< CREANDO SERVICIO >>>");
    this.lista=new Array<Portfolio>();
  }
  /**alta: Public method that creates a new Portfolio element and includes it in the Portfolio Array
   * @param  {string} nombre
   * @param  {string} desc
   * @param  {string} fich
   * @returns void
   */
  public alta(nombre: string, desc: string, fich: string):void{
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio=new Portfolio(nombre,desc,fich);
    this.lista.push(nuevoPortfolio);
    console.log("<<< ALTA PORTFOLIO: "+nombre+" >>>");
  }
  /**baja: Public method that erases content of the Portfolio Array after searching by his name
   * @param  {string} nombre
   * @returns void
   */
  public baja(nombre: string):void{
    console.log("<<< BAJA PORTFOLIO: "+nombre+" >>>");
    for(var g=0;g<=this.lista.length;g++){
      if(this.lista[g].getNombre().toLowerCase()==nombre.toLowerCase()){
        this.lista.splice(g,1);
        console.log("<<< ELEMENTO ELIMINADO "+nombre+" >>>");
        break;
      }
    }
  }
  /**listar: Public method that lists all the content in Array<Portfolio>
   * @returns Array
   */
  public listar(): Array<Portfolio>{
    console.log("<<< LISTA PORTFOLIOS: "+this.lista.toString()+" >>>");
    return this.lista;
  }
}
