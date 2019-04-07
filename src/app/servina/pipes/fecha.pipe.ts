import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fechaPipe'})
export class FechaPipe implements PipeTransform {
/**     transform(value: string): Date {
// 2016-11-25T00:00:00Z
        let anio = parseInt(value.substring(0,4));
        let mes  = parseInt(value.substring(5,7)) - 1;
        let dia  = parseInt(value.substring(8,10));
//        let fecha = new String(dia + "/" + mes + "/" + anio) ;
        return new Date(anio, mes, dia);
    } */
    transform(value: string): String {
// 2016-11-25T00:00:00Z
        let anio = value.substring(0,4);
        let mes  = value.substring(5,7);
        let dia  = value.substring(8,10);
        let fecha = new String(dia + "/" + mes + "/" + anio) ;
        return fecha;
    }
}