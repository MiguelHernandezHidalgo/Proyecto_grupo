import { Portfolio } from "./portfolio";

export class StoragePortfolio {
    private arrPortfolio:Array<Portfolio>;
    private ls;
    constructor(){
        this.ls=window.localStorage;
    }
    //Accesores

    public get getArrPortfolio():Array<Portfolio>{
        return this.arrPortfolio;
    }

    public set setArrPortfolio(arrPortfolio){
        this.arrPortfolio=arrPortfolio;
    }

    arrTolocalSt(){
        var obj:string;
        obj=JSON.stringify(this.arrPortfolio);
        this.ls.setItem("portfolios", obj);

    }

    localStToArr():Array<Portfolio>{
        var arrayEnTexto=this.ls.getItem("portfolios");
		this.arrPortfolio = JSON.parse(arrayEnTexto);
			// Este array lo convertimos en un array de obj Portfolio
			for (var i = 0; i < this.arrPortfolio.length; i++) {
				this.arrPortfolio[i] = new Portfolio(this.arrPortfolio[i].nombre, this.arrPortfolio[i].descripcion,this.arrPortfolio[i].fichero);
            }
            return this.arrPortfolio;
    }
}
