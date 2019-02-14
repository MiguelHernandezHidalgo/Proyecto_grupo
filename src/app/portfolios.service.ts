import { Injectable } from '@angular/core';
import { Portfolio } from './portfolio';
import { runInThisContext } from 'vm';
import { StoragePortfolio } from './storage-portfolio';

@Injectable()
export class PortfoliosService {
  nuevoServicio:StoragePortfolio;
  constructor() {
    console.log("<<< CREANDO SERVICIO >>>");
    this.nuevoServicio=new StoragePortfolio();
  }
  /**alta: Public method that creates a new Portfolio element and includes it in the LocalStorage
   * @param  {string} nombre
   * @param  {string} desc
   * @param  {string} fich
   * @returns void
   */
  public alta(nombre: string, desc: string, fich: string):void{
    let nuevoPortfolio: Portfolio;
    nuevoPortfolio=new Portfolio(nombre,desc,fich);
    //this.lista.push(nuevoPortfolio);

    this.nuevoServicio.arrTolocalSt();
    console.log("<<< ALTA PORTFOLIO: "+nuevoPortfolio.nombre+" >>>");
  }
  /**baja: Public method that erases content of the Portfolio Array after searching by his name
   * @param  {string} nombre
   * @returns void
   */
  /*public baja(nombre: string):void{
    console.log("<<< BAJA PORTFOLIO: "+nombre+" >>>");
    for(var g=0;g<=this.lista.length;g++){
      if(this.lista[g].nombre.toLowerCase()==nombre.toLowerCase()){
        this.lista.splice(g,1);
        console.log("<<< ELEMENTO ELIMINADO "+nombre+" >>>");
        break;
      }
    }
  }*/
  /**listar: Public method that lists all the content in Array<Portfolio>
   * @returns Array
   */
  public listar(): Array<Portfolio>{
    var arrayJSON:Array<Portfolio>;
    arrayJSON=this.nuevoServicio.localStToArr();
    console.log("<<< LISTA PORTFOLIOS: "+arrayJSON.toString()+" >>>");
    return arrayJSON;
  }
}
