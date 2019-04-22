export class Banco {
   constructor(
      public idBanco: number,
      public codigo: string,
      public descripcion: string,
      public codigoDebito: number,
      public descripPrestacion: string,
      public bancoRecaudador: string,
   ) {
   }
}