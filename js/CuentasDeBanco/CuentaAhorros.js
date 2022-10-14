import { Cuenta } from './Cuenta.js';


export class CuentaAhorros extends Cuenta {
    COMMISSION = 2;
    static cantidad = 0;

    constructor( cliente, numeroCuenta ) {
        super( cliente, numeroCuenta );

        CuentaAhorros.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# cuentas de ahorro: ${ CuentaAhorros.cantidad }`;
    }

    retirar( value ) {
        super._retirar( value, this.COMMISSION );
    }
} 