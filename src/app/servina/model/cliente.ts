export class Cliente {
   constructor(
        public ID_CLIENTE: number,
        public TIPO_DOC: string,
        public NRO_DOC: number,
        public CBU: string,
        public CA_SUCURSAL: string,
        public CA_NRO: string,
        public NOMBRE: string,
        public APELLIDO: string,
        public F_INGRESO: string,
        public ID_LOC_PARTICULAR: number,
        public ID_LOC_LABORAL: number,
        public ID_LOC_INFORMADO: number,
        public ID_DELEGACION: number,
        public ESTADO: number,
        public F_ESTADO: string,
        public ESTADO_ANTERIOR: number,
        public COMENTARIOS: string
    ) {
   }
}