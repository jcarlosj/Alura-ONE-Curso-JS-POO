import { Cuenta } from './Cuenta.js';


export class CuentaCorriente extends Cuenta {
    COMMISSION = 5;
    static cantidad = 0;

    constructor( cliente, numeroCuenta ) {
        super( cliente, numeroCuenta );

        CuentaCorriente.cantidad ++;
    }

    // Metodo estático de la clase
    static getCantidad() {
        return `# cuentas corrientes: ${ CuentaCorriente.cantidad }`;
    }

    retirar( value ) {
        super._retirar( value, this.COMMISSION );
    }
} 