export class Delegacion {
   constructor(
      public idDelegacion: number,
      public codigo: string,
      public descripcion: string,
      public fechaAlta: Date,
      public utilizar: number,
      public estadoDescrip: string,
   ) {
   }
}