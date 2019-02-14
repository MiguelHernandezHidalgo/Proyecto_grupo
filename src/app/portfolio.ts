export class Portfolio {
    public nombre: string;
    public descripcion: string;
    public fichero: string;
    constructor(nombre:string, descripcion:string, fichero:string){
        
            if(nombre==""){
                console.error("Nombre no puede estar vacío");
                throw new Error("Nombre no puede estar vacío");
            }
            this.nombre=nombre;
            this.descripcion=descripcion;
            this.fichero=fichero;
        
    }
}
