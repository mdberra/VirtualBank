export class Delegacion {
   constructor(
      public idDelegacion: number,
      public codigo: string,
      public descripcion: string,
      public fechaAlta: Date,
      public idLocalizacion: number,
      public idEntidad: number,
      public idBanco: number,
      public utilizar: number
//      public estadoDescrip: string
   ) {
   }
}