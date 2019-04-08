export class Delegaciones {
   constructor(
      public idDelegacion: number,
      public codigo: string,
      public descripcion: string,
      public fechaAlta: Date,
      public utilizar: number,
      public idBanco: number,
      public bcodigo: string,
      public bdescripcion: string,
      public codigoDebito: number,
      public descripPrestacion: string,
      public bancoRecaudador: string,
   ) {
   }
}