export class EstadoOptions {
    estados: Estado[] = [];

    getLenght() : number {
        return this.estados.length;
    }
    setEstados(idEstado: number, descripcion: string) : void {
        this.estados.push(new Estado(idEstado, descripcion));
    }
    setEstadosKV(keyvalues: Array<object> = []) : void {
        for(let kv of keyvalues) {
            this.estados.push(new Estado(Number(kv['idEstado']), kv['descripcion']));
        }
    }
    setDelegKV(keyvalues: Array<object> = []) : void {
        for(let kv of keyvalues) {
            this.estados.push(new Estado(Number(kv['idDelegacion']), kv['descripcion']));
        }
    }
    getEstados() : Estado[] {
        return this.estados;
    }

    getEstadoId(idEstado: number) : Estado[] {
        let e = this.estados.filter(function(item, index, array){
            return item.idEstado === idEstado;    
        });
        return e;
    }
    getEstadoDesc(descripcion: string) : Estado[] {
        let e = this.estados.filter(function(item, index, array){
            return item.descripcion === descripcion;    
        });
        return e;
    }
}

export class Estado {
    constructor(
        public idEstado: number,
        public descripcion: string
    ) {
    }
}