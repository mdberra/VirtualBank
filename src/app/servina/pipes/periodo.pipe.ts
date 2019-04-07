import { Pipe, PipeTransform } from '@angular/core';
import { Contacto } from '../model/contacto';

@Pipe({name: 'periodoPipe'})
export class PeriodoPipe implements PipeTransform {
   private salida: Array<Contacto> = [];

   constructor() {
   }
   transform(rows: Contacto[], p: string): Contacto[] {
      this.salida = [];
      for(let r of rows) {
        if(r['periodo'] === p) {
            this.salida.push(r);
        }
      }
     return this.salida;
   }
}