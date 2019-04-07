export class Debito {
   constructor(
      public ID_CLIENTE: number,
      public FECHA: string,
      public IMPORTE: number,
      public BANCO_RECAUDADOR: string,
      public ESTADO: string,
      public CODIGO_RECHAZO: string
   ) {
   }
}