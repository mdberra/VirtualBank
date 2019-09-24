export class Cliente {
   constructor(
        public idCliente: number,
        public tipoDoc: string,
        public nroDoc: number,
        public cbu: string,
        public caSucursal: string,
        public caNro: string,
        public nombre: string,
        public apellido: string,
        public fechaIngreso: Date,
        public idLocParticular: number,
        public idLocLaboral: number,
        public idLocInformado: number,
        public idDelegacion: number,
        public estado: number,
        public fechaEstado: Date,
        public comentarios: string
    ) {
   }
}