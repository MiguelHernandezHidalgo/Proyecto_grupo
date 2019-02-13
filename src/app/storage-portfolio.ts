import { Portfolio } from "./portfolio";

export class StoragePortfolio {
    private arrPortfolio:Array<Portfolio>;
    constructor(a){
        this.arrPortfolio=a;
    }
    //Accesores

    public get getArrPortfolio():Array<Portfolio>{
        return this.arrPortfolio;
    }

    public set setArrPortfolio(arrPortfolio){
        this.arrPortfolio=arrPortfolio;
    }

    arrToJSON(){
        var obj:Array<Portfolio>;
        //this.arrPortfolio.forEach(element => obj[element.getNombre()]=element.getDescripcion());
    }

    JSONToArr(){

    }
}
