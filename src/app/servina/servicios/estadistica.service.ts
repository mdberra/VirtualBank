import { Injectable } from '@angular/core';
import { Estadistica } from '../model/estadistica';

@Injectable()
export class EstadisticaService {

    constructor() {
        console.log("EstadisticaService: ready")
    }
    getData():Estadistica[] {
        return this.data;
    }
        private data:Estadistica[] =
    [
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "03/2018",
        "IMPORTE": 819.1
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "04/2018",
        "IMPORTE": 627.9
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "06/2018",
        "IMPORTE": 627.9
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "07/2018",
        "IMPORTE": 627.9
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "03/2018",
        "IMPORTE": 403.8
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "05/2018",
        "IMPORTE": 249.7
        },
        {
        "DELEGACION": "Afip (aduana)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "06/2018",
        "IMPORTE": 249.7
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "03/2018",
        "IMPORTE": 6577
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "04/2018",
        "IMPORTE": 3517.5
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "05/2018",
        "IMPORTE": 8638
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "06/2018",
        "IMPORTE": 7131.4
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "07/2018",
        "IMPORTE": 8260.6
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "08/2018",
        "IMPORTE": 3676.7
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "09/2018",
        "IMPORTE": 714.4
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "10/2018",
        "IMPORTE": 6473.5
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Devuelto",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "07/2018",
        "IMPORTE": 418.6
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Devuelto",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "08/2018",
        "IMPORTE": 418.6
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Disparado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "09/2018",
        "IMPORTE": 14468.3
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "03/2018",
        "IMPORTE": 3195.3
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "08/2018",
        "IMPORTE": 9065.2
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "09/2018",
        "IMPORTE": 4237.8
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "10/2018",
        "IMPORTE": 12947
        },
        {
        "DELEGACION": "APOS (La Rioja)",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R24",
        "PERIODO": "08/2018",
        "IMPORTE": 18243.7
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "07/2018",
        "IMPORTE": 5211.9
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "08/2018",
        "IMPORTE": 1300.2
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Disparado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "08/2018",
        "IMPORTE": 308712.1
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Disparado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "09/2018",
        "IMPORTE": 169103.7
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Disparado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "10/2018",
        "IMPORTE": 131525.1
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R02",
        "PERIODO": "08/2018",
        "IMPORTE": 440.9
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R04",
        "PERIODO": "08/2018",
        "IMPORTE": 1980.2
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "08/2018",
        "IMPORTE": 24395.2
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Itau",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R93",
        "PERIODO": "08/2018",
        "IMPORTE": 1378.8
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "03/2018",
        "IMPORTE": 3549.9
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "04/2018",
        "IMPORTE": 9162.4
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "05/2018",
        "IMPORTE": 7122.1
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Acreditado",
        "CODIGO_RECHAZO": " ",
        "PERIODO": "06/2018",
        "IMPORTE": 11980.9
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R02",
        "PERIODO": "03/2018",
        "IMPORTE": 478
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R02",
        "PERIODO": "04/2018",
        "IMPORTE": 478
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R02",
        "PERIODO": "05/2018",
        "IMPORTE": 478
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R02",
        "PERIODO": "06/2018",
        "IMPORTE": 956
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R04",
        "PERIODO": "03/2018",
        "IMPORTE": 1693.4
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R04",
        "PERIODO": "04/2018",
        "IMPORTE": 1693.4
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R04",
        "PERIODO": "05/2018",
        "IMPORTE": 1693.4
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R04",
        "PERIODO": "06/2018",
        "IMPORTE": 3386.8
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R08",
        "PERIODO": "06/2018",
        "IMPORTE": 118
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "03/2018",
        "IMPORTE": 12531.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "04/2018",
        "IMPORTE": 10913.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "05/2018",
        "IMPORTE": 11788.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R10",
        "PERIODO": "06/2018",
        "IMPORTE": 21034.8
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R15",
        "PERIODO": "03/2018",
        "IMPORTE": 536.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R15",
        "PERIODO": "04/2018",
        "IMPORTE": 536.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R15",
        "PERIODO": "05/2018",
        "IMPORTE": 536.5
        },
        {
        "DELEGACION": "Catamarca",
        "BANCO_RECAUDADOR": "Banco Provincia",
        "ESTADO": "Rechazado",
        "CODIGO_RECHAZO": "R15",
        "PERIODO": "06/2018",
        "IMPORTE": 1073
        }
    ];
}