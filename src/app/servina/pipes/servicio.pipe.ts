import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../model/contacto';

@Pipe({name: 'servicioPipe'})
export class ServicioPipe implements PipeTransform {
   private salida: Array<Contacto> = [];

   constructor() {
   }
   transform(rows: Contacto[], p: number): Contacto[] {
      this.salida = [];
      for(let r of rows) {
        if(r['idServicio'] === p) {
            this.salida.push(r);
        }
      }
     return this.salida;
   }
}