import { Portfolio } from "./portfolio";

export class StoragePortfolio {
    private ls;
    constructor(){
        this.ls=window.localStorage;
    }
    //Accesores

    arrTolocalSt(arrPortfolio ){
        var obj:string;
        obj=JSON.stringify(arrPortfolio);
        this.ls.setItem("portfolios", obj);

    }

    localStToArr():Array<Portfolio>{
        var arrayEnTexto=this.ls.getItem("portfolios");
		let arrPortfolio : Portfolio[]= JSON.parse(arrayEnTexto);
			// Este array lo convertimos en un array de obj Portfolio
			for (var i = 0; i < arrPortfolio.length; i++) {
				arrPortfolio[i] = new Portfolio(arrPortfolio[i].nombre, arrPortfolio[i].descripcion,arrPortfolio[i].fichero);
            }
            return arrPortfolio;
    }
}
