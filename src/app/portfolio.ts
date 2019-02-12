export class Portfolio {
    constructor(
        private nombre: string,
        private descripcion: string,
        private fichero: string
    ){
        if(this.nombre==""){
            console.error("Nombre no puede estar vacío");
            throw new Error("Nombre no puede estar vacío");
        }
    }
    //getters and setters
    public getNombre():string{
        return this.nombre;
    }
    public setNombre(nombre:string):void{
        this.nombre=nombre;
    }

    public getDescripcion():string{
        return this.descripcion;
    }
    public setDescripcion(descripcion:string):void{
        this.descripcion=descripcion;
    }

    public getFichero():string{
        return this.fichero;
    }
    public setFichero(fichero:string):void{
        this.fichero=fichero;
    }
}
